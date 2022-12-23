FROM alpine:3.16.2 AS builder

# Installing the necessary packages
RUN apk add npm=8.10.0-r0

# Copying the source files and building
RUN mkdir -p /opt/build_dir
COPY . /opt/build_dir
WORKDIR /opt/build_dir
RUN npm install
RUN npm run-script build

FROM alpine:3.16.2

RUN apk add npm=8.10.0-r0
RUN apk add curl=7.83.1-r5
RUN npm install -g serve@14.1.2

# Creating a separate user
RUN addgroup -S reactserving
RUN adduser -S reactserving -G reactserving

# Setting of environment variables
ENV PORT=3000
ENV HOME_FOLDER=/home/reactserving

# Copying the build folder into the home folder
COPY --from=builder /opt/build_dir/build $HOME_FOLDER/build

# Setting the necessary permissions
RUN chown -R reactserving:reactserving $HOME_FOLDER/build

# Adding a healthcheck, which checks if the app is listening on the specified port
HEALTHCHECK CMD \
            curl -f localhost:$PORT

VOLUME /var/log

# Changing the user
USER reactserving

EXPOSE $PORT

HEALTHCHECK CMD \
            curl -f localhost:"$PORT"

CMD serve -s -l $PORT $HOME_FOLDER/build

FROM nginx:1.23.2-alpine

COPY conf/nginx.conf /etc/nginx/nginx.conf
COPY conf/mime.types /etc/nginx/mime.types
COPY conf/conf.d/server.key /etc/nginx/conf.d/server.key
COPY conf/conf.d/server.pem /etc/nginx/conf.d/server.pem

VOLUME /var/log

RUN chown -R nginx:nginx /etc/nginx
RUN chown -R nginx:nginx /var/cache/nginx
RUN touch /var/run/nginx.pid
# The next line violates CIS benchmark 2.3.3, but is
# unavoidable for now if we do not want to run NGINX
# as root, which poses a higher threat than the ownership
# of this one PID file.
RUN chown -R nginx:root /var/run/nginx.pid
RUN chmod 0644 /var/run/nginx.pid

HEALTHCHECK CMD \
            curl -k -f https://localhost

USER nginx

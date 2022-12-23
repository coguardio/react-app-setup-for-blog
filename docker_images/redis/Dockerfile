FROM redis:7.0.5-alpine

COPY conf/redis.conf /usr/local/etc/redis/redis.conf

VOLUME /var/log

HEALTHCHECK CMD \
            redis-cli ping

USER redis

CMD [ "redis-server", "/usr/local/etc/redis/redis.conf" ]

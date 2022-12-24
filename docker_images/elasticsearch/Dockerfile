FROM elasticsearch:8.5.0

#coguard-config-checker: disable dockerfile_container_healthcheck_parameter Check already in parent image
VOLUME /var/log

# To distribute the encryption key, we needed to alter the entrypoint script slightly
# if it changes in future versions, we need to ensure that we also capture its changes.
# Hence, we are adding a test that the md5sum of the docker-entrypoint has not changed.
RUN test $(md5sum /usr/local/bin/docker-entrypoint.sh | awk '{print $1}') = "8fb8c5e0e9eeb1eb2bae786401c46fa1"

COPY scripts/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh

USER root
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
USER elasticsearch

HEALTHCHECK --interval=10s --timeout=5s --start-period=1m --retries=5 CMD curl -I -f --max-time 5 http://localhost:9100 || exit 1

COPY conf/elasticsearch.yml /usr/share/elasticsearch/config/elasticsearch.yml

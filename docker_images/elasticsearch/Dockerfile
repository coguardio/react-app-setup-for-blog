FROM elasticsearch:8.5.0

#coguard-config-checker: disable dockerfile_container_healthcheck_parameter Check already in parent image
VOLUME /var/log
USER elasticsearch

HEALTHCHECK --interval=10s --timeout=5s --start-period=1m --retries=5 CMD curl -I -f --max-time 5 http://localhost:9100 || exit 1

COPY conf/elasticsearch.yml /usr/share/elasticsearch/config/elasticsearch.yml

FROM elasticsearch:8.5.0

#coguard-config-checker: disable dockerfile_container_healthcheck_parameter Check already in parent image
VOLUME /var/log
USER elasticsearch

COPY conf/elasticsearch.yml /usr/share/elasticsearch/config/elasticsearch.yml

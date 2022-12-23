FROM kibana:8.5.0

#coguard-config-checker: disable dockerfile_container_healthcheck_parameter Check already in parent image
VOLUME /var/log
USER kibana

COPY conf/kibana.yml /usr/share/kibana/config/kibana.yml

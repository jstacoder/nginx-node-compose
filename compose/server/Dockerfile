FROM alpine:latest

USER root

RUN apk add nginx nodejs openrc

RUN rm -rf /etc/nginx/nginx.conf

ADD ./server/nginx.conf /etc/nginx/

ADD web/* /usr/share/nginx/html/

RUN rc-update add nginx default
RUN mkdir -p /run/nginx
RUN touch /run/nginx/nginx.pid

expose 80

CMD nginx
#rc-service nginx start

FROM nginx:alpine

MAINTAINER Yuliia Dzidzoieva <yuliia.dzidzoieva@gmail.com>
MAINTAINER Artur Dzidzoiev <artur.dzidzoiev@gmail.com>

COPY nginx.conf /etc/nginx/

WORKDIR /usr/share/nginx/html

COPY dist dist
COPY index.html .
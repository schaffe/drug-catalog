FROM node:alpine

MAINTAINER Yuliia Dzidzoieva <yuliia.dzidzoieva@gmail.com>
MAINTAINER Artur Dzidzoiev <artur.dzidzoiev@gmail.com>

WORKDIR /tmp

COPY package.json .
RUN npm i webpack -g --quiet \
    && npm i --quiet

WORKDIR /usr/src/app
RUN cp -a /tmp/node_modules /usr/src/app/
COPY . .

EXPOSE 8080
CMD ["npm", "run", "dev"]




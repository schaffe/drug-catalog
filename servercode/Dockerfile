FROM node:alpine
ENV NPM_CONFIG_LOGLEVEL warn

MAINTAINER Artur Dzidzoiev <artur.dzidzoiev@gmail.com>

WORKDIR /tmp

COPY package.json .
RUN npm install -g nodemon \
    && npm install

WORKDIR /usr/src/app
RUN cp -a /tmp/node_modules . \
    && cp /tmp/package.json . \
    && mkdir scripts

COPY src/ src/
COPY scripts/run-node.sh scripts/
COPY resources/ resources/

# Expose port
EXPOSE  3000

CMD ["./scripts/run-node.sh"]

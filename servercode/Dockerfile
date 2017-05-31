FROM node:alpine
ENV NPM_CONFIG_LOGLEVEL warn

MAINTAINER Artur Dzidzoiev <artur.dzidzoiev@gmail.com>

WORKDIR /code

RUN mkdir scripts \
    && npm install -g nodemon \
    && npm install

COPY package.json .
COPY src/ src/
COPY scripts/run-node.sh scripts/

# Expose port
EXPOSE  3000

CMD ["./scripts/run-node.sh"]

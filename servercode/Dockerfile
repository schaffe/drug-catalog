FROM node:alpine
ENV NPM_CONFIG_LOGLEVEL warn

MAINTAINER Artur Dzidzoiev <artur.dzidzoiev@gmail.com>

WORKDIR /code

RUN npm install -g nodemon

COPY package.json .
RUN npm install && npm ls

COPY src/ src/

RUN mkdir scripts
COPY scripts/run-node.sh scripts/

# Expose port
EXPOSE  8080

CMD ["./scripts/run-node.sh"]

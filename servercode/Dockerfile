FROM node:alpine
ENV NPM_CONFIG_LOGLEVEL warn

# File Author / Maintainer
MAINTAINER Artur Dzidzoiev

WORKDIR /src

RUN npm install -g nodemon

COPY package.json .
RUN npm install && npm ls

COPY src/ .

# Expose port
EXPOSE  8080

CMD ["nodemon", "index.js"]

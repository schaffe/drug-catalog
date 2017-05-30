[![Build Status](https://travis-ci.org/schaffe/drug-catalog.svg?branch=master)](https://travis-ci.org/schaffe/drug-catalog)
# Home first aid kit
May be used to track consuption of drugs in your home aid kit.
Currently in development.

## Building and running
Allication consist of separate components:
* Mongo
* Node.js 6 server
* Web application

### Preconditions:
You must have installed and added to PATH docker, docker-compose, npm, node 6.
You have to be added to `docker` group
`sudo usermod -aG docker $USER`

Instructions how to install docker-compose https://docs.docker.com/compose/install/.

### Environments
##### DEV
This environment is for local dev purposes. You can up all services by one command. 
The volumes are mounted into the images so you shouldn't manually reload containers
to refresh the code.
```bash
docker-compose -f compose-base.yml -f compose-dev.yml -p backend-nodejs up --build
```

##### TEST
Used for testing containers inside. Invokes test frameworks inside containers and 
expects test to be finished.
```bash
docker-compose -f compose-base.yml -f compose-test.yml -p backend-nodejs up --build
```

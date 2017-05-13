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
You must have installed and added to PATH docker, npm, node 6. You must be added to `docker` group
`sudo usermod -aG docker $USER`

### Initialize environment
```bash
cd servercode
npm i
npm run setup
cd ../webclient
npm i
```

### Run
```bash
cd servercode
npm start &
cd ../webclient
npm run dev
```

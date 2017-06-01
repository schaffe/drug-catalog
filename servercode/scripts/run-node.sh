#!/usr/bin/env ash

echo ${ENV};

if [ "${ENV}" == 'DEV' ]; then
    trap "jobs -p | xargs kill" INT
    nodemon src/index.js;
fi

if [ "${ENV}" == 'TEST' ]; then
    npm test;
    exit 0;
fi

node src/index.js;
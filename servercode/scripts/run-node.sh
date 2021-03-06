#!/usr/bin/env ash

echo ${ENV};

if [ "${ENV}" == 'DEV' ]; then
    trap "jobs -p | xargs kill" INT
    nodemon src/main/index.js;
fi

if [ "${ENV}" == 'TEST' ]; then
    npm test;
    exit $?
fi

node src/main/index.js;
#!/usr/bin/env ash

echo ${ENV};
if [ "${ENV}" == 'DEV' ]; then
    #todo not killing normally
    nodemon src/index.js
    exit 0;
fi

node src/index.js;
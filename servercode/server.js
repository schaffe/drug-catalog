require('app-module-path').addPath(__dirname + '/src');

const index = require('./src/index');

index.run();
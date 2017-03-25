const express = require("express");
const config = require("./config/config.js");
const morgan = require("morgan");
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send("Hello world!");
});

const run = () => {
    MongoClient.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/exampleDb')
        .then(() => console.info('Connected to Mongo.'))
        .catch(() => console.error('Error connecting to Mongo'))
        .then(() => app.listen(config.express.port))
        .then(() => console.warn("Listening to http://localhost:" + config.express.port));
};

run();


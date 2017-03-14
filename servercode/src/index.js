const express = require("express");
const morgan = require("morgan");
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send("Hello world!");
});

// Connect to the db
MongoClient.connect('mongodb://localhost:27017/exampleDb')
    .then(() => console.info('Connected to Mongo.'))
    .catch(() => console.error('Error connecting to Mongo'))
    .then(() => app.listen(3000))
    .then(() => console.warn("Listening to http://localhost:3000"));

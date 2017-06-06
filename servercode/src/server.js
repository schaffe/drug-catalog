const express = require("express");
const config = require("config/config");
const morgan = require("morgan");
const mongo = require('util/mongo');
const bodyParser = require('body-parser');

const app = express();

app.use(require('./cors'));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', require('router'));

exports.run = () => {
    mongo.connect()
        .then(() => app.listen(config.express.port))
        .then(() => console.warn("Listening to http://localhost:" + config.express.port));
};


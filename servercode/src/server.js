const express = require("express");
const config = require("config/config");
const morgan = require("morgan");
const mongo = require('util/mongo');
const bodyParser = require('body-parser');
const consul = require('consul')({host: 'consul'});

const app = express();

app.use(require('./cors'));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', require('router'));

consul.agent.service.register('backend-nodejs', function(err) {
    if (err) throw err;
});

exports.run = () => {
    mongo.connect()
        .then(() => app.listen(config.express.port))
        .then(() => console.warn("Listening to http://localhost:" + config.express.port));
};


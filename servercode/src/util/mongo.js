const mongoose = require('mongoose');
const config = require("../config/config");

exports.connect = () => {
    mongoose.Promise = global.Promise;
    return mongoose.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/' + config.mongo.db)
        .then(() => console.info('Connected to Mongo.'))
        .catch((err) => {
            console.error('Error connecting to Mongo' + err);
            throw err;
        })
};
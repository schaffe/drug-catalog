const MongoClient = require('mongodb').MongoClient;
const config = require("./config/config");

const state = {
    db: null,
};

exports.connect = () => {
    if (state.db)
        return new Promise((resolve) => {
            resolve(db);
        });
    else
        return MongoClient.connect('mongodb://' + config.mongo.host + ':' + config.mongo.port + '/exampleDb')
            .then((db) => {
                console.info('Connected to Mongo.');
                state.db = db;
                return db;
            })
            .catch(() => console.error('Error connecting to Mongo'));
};

exports.get = function () {
    return state.db
};

exports.close = function (done) {
    if (state.db) {
        state.db.close(function (err, result) {
            state.db = null;
            state.mode = null;
            done(err)
        })
    }
};
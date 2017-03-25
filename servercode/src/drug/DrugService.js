const mongo = require('mongo');

const collection = mongo.get().collection('drugs');

exports.add = (drug) => {
    return collection.insertOne(drug);
};

exports.fetch = () => {
    return collection.find();
};

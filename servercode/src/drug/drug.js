const mongo = require('mongo');

exports.add = (drug) => {
    console.log(drug);
    const collection = mongo.get().collection('drugs');
    return collection.insertOne(drug);
};

exports.fetch = () => {
    const collection = mongo.get().collection('drugs');
    return collection.find().toArray();
};

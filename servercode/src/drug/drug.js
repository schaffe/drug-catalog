const mongoose = require('mongoose');
const random = require('util/random');

const drugSchema = new mongoose.Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    group: [{type: String, required: false}],
    bestBefore: {type: Date, required: false},
    amount: {type: String, required: true, default: 1},
});

const Drug = mongoose.model('Drugs', drugSchema);

exports.add = (drug) => {
    console.log(drug);
    if (drug.hasOwnProperty('id')) {
        return exports.delete(drug.id)
            .then(() => {
                return new Drug(drug).save();
            })
    } else {
        drug.id = random.string(8, true);
        return new Drug(drug).save();
    }
};

exports.fetch = () => {
    return Drug.find();
};

exports.remove = (id) => {
    return Drug.remove({id: id}).exec();
};

exports._drop = () => {
    return Drug.remove({}).exec();
};
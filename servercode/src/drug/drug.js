var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const drugSchema = new Schema({
    title: {type: String, required: true},
    group: [{type: String, required: false}],
    bestBefore: {type: Date, required: false},
    number: {type: String, required: true, default: 1},
});

const Drug = mongoose.model('Drugs', drugSchema);

exports.add = (drug) => {
    console.log(drug);
    return new Drug(drug).save();
};

exports.fetch = () => {
    return Drug.find();
};

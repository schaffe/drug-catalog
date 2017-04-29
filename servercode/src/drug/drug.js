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
const self = (() => {
    return {
        add: (drug) => {
            if (drug.hasOwnProperty('id')) {
                return self.remove(drug.id)
                    .then(() => {
                        return new Drug(drug).save();
                    })
            } else {
                drug.id = random.string(8, true);
                return new Drug(drug).save();
            }
        },
        fetch: () => {
            return Drug.find();
        },
        remove: (id) => {
            return Drug.remove({id: id}).exec();
        },
        _drop: () => {
            return Drug.remove({}).exec();
        },
    }
})();

module.exports = self;

const mongoose = require('mongoose');
const random = require('../util/random');
const cache = new (require("node-cache"))({stdTTL: 100, checkperiod: 120});

const drugSchema = new mongoose.Schema({
    id: {type: String, required: true},
    title: {type: String, required: true},
    group: [{type: String, required: false}],
    bestBefore: {type: Date, required: false},
    amount: {type: String, required: true, default: 1},
});
const CACHE_KEY_ALL = "__all_drugs";

const Drug = mongoose.model('Drugs', drugSchema);
const self = (() => {
    return {
        add: (_drug) => {
            cache.del(CACHE_KEY_ALL);
            //clone object to prevent external modification
            const drug = Object.assign({}, _drug);
            if (drug.hasOwnProperty('id')) {
                return self.remove(drug.id)
                    .then(() => {
                        return new Drug(drug).save();
                    })
                    .then((added) => added._doc);
            } else {
                drug.id = random.string(8, true);
                return new Drug(drug).save()
                    .then((added) => added._doc);
            }
        },
        fetch: () => {
            let value = cache.get(CACHE_KEY_ALL);
            if (value === undefined)
                return Drug.find()
                    .then((res) => {
                        cache.set(CACHE_KEY_ALL, res);
                        return res;
                    });
            else
                return Promise.resolve(value);

        },
        remove: (id) => {
            cache.del(CACHE_KEY_ALL);
            return Drug.remove({id: id}).exec();
        },
        _drop: () => {
            cache.del(CACHE_KEY_ALL);
            return Drug.remove({}).exec();
        },
    }
})();

module.exports = self;

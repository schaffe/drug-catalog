'use strict';
require('../test/bootstap.spec');
const DrugService = require('drug/drug');
const assert = require('chai').assert;
const mongo = require('util/mongo');

describe('DrugService module', () => {

    before(() => {
        return mongo.connect()
            .then(() => {
                return DrugService._drop();
            })
    });

    it('all', () => {
        const item1 = {
            title: "Aspirin",
            group: "Ache",
            bestBefore: new Date(),
            number: 1
        };
        let added;
        return DrugService.add(item1)
            .then((addedResult) => {
                assert.isNotNull(addedResult.id, "Id not assigned");
                added = addedResult;
                return DrugService.fetch();
            })
            .then((result) => {
                assert.equal(1, result.length);
                assert.equal(added.id, result[0].id);
                return DrugService.remove(added.id);
            })
            .then(() => DrugService.fetch())
            .then((result) => {
                assert.equal(0, result.length);
            })
    })
});
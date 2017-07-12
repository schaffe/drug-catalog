'use strict';
const DrugService = require('../../main/drug/drug');
const assert = require('chai').assert;
const mongo = require('../../main/util/mongo');

describe('DrugService module', () => {

    const item1 = {
        title: "Aspirin",
        group: "Ache",
        bestBefore: new Date(),
        amount: 1
    };

    before(() => {
        return mongo.connect()
            .then(() => DrugService._drop())
    });

    it('should perform basic crud operations', () => {

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
            .then((result) => assert.equal(0, result.length))
    });

    it('should update element of add if there is assigned id', () => {
        let added;
        return DrugService.add(item1)
            .then((addedResult) => {
                assert.isNotNull(addedResult.id, "Id not assigned");
                assert.equal(item1.title, addedResult.title);
                added = addedResult;
                addedResult.title = 'Valium';
                return DrugService.add(addedResult);
            })
            .then((addedResult) => {
                assert.equal(added.id, addedResult.id);
                assert.notEqual(item1.title, addedResult.title);
                assert.equal('Valium', addedResult.title);
                return DrugService.remove(added.id);
            })
    });

    it('should invalidate cache on add', () => {
        let added;
        return DrugService.add(item1)
            .then(() => DrugService.fetch())
            .then((result) => {
                assert.equal(1, result.length);
                return DrugService.add(item1);
            })
            .then((addedResult) => {
                added = addedResult;
                return DrugService.fetch()
            })
            .then((result) => {
                assert.equal(2, result.length);
                return DrugService.remove(added.id);
            })
            .then(() => DrugService.fetch())
            .then((result) => {
                assert.equal(1, result.length);
                return DrugService.remove(result[0].id);
            })
            .then(() => DrugService.fetch())
            .then((result) => assert.equal(0, result.length))
    });
});
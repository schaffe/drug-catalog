'use strict';

const DrugService = require('./drug');
const Drug = require('./Drug');
const expect = require('chai').expect;

describe('DrugService module', () => {


    describe('"add"', () => {
        const item = new Drug("test", "1");
        DrugService.add(item);

    })
});
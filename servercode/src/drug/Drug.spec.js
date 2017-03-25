'use strict';

const Drug = require('./Drug');
const expect = require('chai').expect;

describe('Drug module', () => {
    describe('"up"', () => {
        it('should export a function', () => {
            expect(Drug.up).to.be.a('function')
        });
        it('should return a Promise', () => {
            const usersUpResult = Drug.up();
            expect(usersUpResult.then).to.be.a('Function');
            expect(usersUpResult.catch).to.be.a('Function')
        })
    })
});
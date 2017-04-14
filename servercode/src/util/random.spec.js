const assert = require('chai').assert;
const random = require('./random');

describe('random module', () => {

    describe('"random alphanumeric"', () => {
        let actual = random.string(10, true);
        assert.equal(10, actual.length);
    });
    describe('"random chars"', () => {
        let actual = random.string();
        assert(actual.length === 5);
        assert.isFalse(/\d/.test(actual))
    });

    describe('"random empty"', () => {
        let actual = random.string(0);
        assert(actual.length === 0);
    });

    describe('"random float"', () => {
        let actual = random.decimal();
        assert(actual >= 0 && actual < 1);
    });

    describe('"random int default"', () => {
        let actual = random.int();
        assert(actual >= 0 && actual < 100);
    });

    describe('"random int range"', () => {
        let actual = random.int(10);
        assert(actual >= 0 && actual < 10);
    });

    describe('"random int range"', () => {
        let actual = random.int(0);
        assert(actual === 0);
    });
});
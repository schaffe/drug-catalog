const assert = require('chai').assert;
const random = require('../../main/util/random');

describe('random module', () => {

    it('"returns random alphanumeric"', () => {
        let actual = random.string(10, true);
        assert.equal(10, actual.length);
    });
    it('"returns random chars"', () => {
        let actual = random.string();
        assert(actual.length === 5);
        assert.isFalse(/\d/.test(actual))
    });

    it('"returns random empty"', () => {
        let actual = random.string(0);
        assert(actual.length === 0);
    });

    it('"returns random float"', () => {
        let actual = random.decimal();
        assert(actual >= 0 && actual < 1);
    });

    it('"returns random int default"', () => {
        let actual = random.int();
        assert(actual >= 0 && actual < 100);
    });

    it('"returns random int range"', () => {
        let actual = random.int(10);
        assert(actual >= 0 && actual < 10);
    });

    it('"returns random int range"', () => {
        let actual = random.int(0);
        assert(actual === 0);
    });
});
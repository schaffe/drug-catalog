const jwt = require('jsonwebtoken');

const secret = "secret";

module.exports = (() => {
    return {
        verify: (token) => jwt.verify(token, secret),
        issue: (data, exp) => jwt.sign({
            exp,
            data
        }, secret)
    }
})();
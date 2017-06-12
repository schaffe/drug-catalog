const jwt = require('jsonwebtoken');

const secret = "secret";

module.exports = (() => {
    return {
        verify: (token) => jwt.verify(token, secret),
        issue: (userData) => jwt.sign(userData, secret)
    }
})();
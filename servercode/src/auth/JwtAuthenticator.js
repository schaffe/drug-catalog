const jwt = require('./JwtService');

module.exports = (() => {
    return {
        authenticate: (token) => jwt.verify(token)
    }
})();
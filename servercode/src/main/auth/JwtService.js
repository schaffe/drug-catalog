const jwt = require('jsonwebtoken');
const config = require('../config/index');
const fs = require('fs');

module.exports = (() => {
    const secretKey = fs.readFileSync(config.secrets.jwtKeyPath);
    const publicKey = fs.readFileSync(config.secrets.jwtPubKeyPath);

    return {
        verify: (token) => jwt.verify(token, publicKey, {algorithm: 'RS256'}),
        issue: (data, exp) => jwt.sign({exp, data}, secretKey, {algorithm: 'RS256'})
    }
})();
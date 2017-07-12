const jwt = require('./JwtService');
const userService = require('./UserService');
const bcrypt = require('bcryptjs');

const TTL_SECONDS = 30 * 24 * 60 * 60; // 30 days

const authenticate = (authData) => {
    let login = authData.login;
    let password = authData.password;
    return userService.getUser(login)
        .then(user => {
            return checkPassword(user.password, password)
                ? Promise.resolve(prepareResponse(user))
                : Promise.reject("Username and password do not match")
        });
};
let prepareResponse = function (user) {
    delete user.password;
    const expires = TTL_SECONDS;
    const token = jwt.issue(user, expireTime(expires));
    return {
        token,
        user,
        expires
    };
};

let checkPassword = function (userPassword, password) {
    return bcrypt.compareSync(password, userPassword);
};

let expireTime = (ttl) => Math.floor(Date.now() / 1000) + ttl;

module.exports = (() => {
    return {
        authenticate
    }
})();
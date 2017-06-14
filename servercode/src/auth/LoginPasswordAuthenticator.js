const jwt = require('./JwtService');
const userService = require('./UserService');
const bcrypt = require('bcryptjs');

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
    return {
        token: jwt.issue(user),
        user
    };
};

let checkPassword = function (userPassword, password) {
    return bcrypt.compareSync(password, userPassword);
};

module.exports = (() => {
    return {
        authenticate
    }
})();
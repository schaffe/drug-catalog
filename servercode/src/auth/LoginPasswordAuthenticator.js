const jwt = require('./JwtService');
const userService = require('./UserService');
const bcrypt = require('bcryptjs');

const authenticate = (authData) => {
    let login = authData.login;
    let password = authData.password;
    return userService.getUser(login)
        .then(user => {
            return checkPassword(user.password, password)
                ? Promise.resolve(jwt.issue(filterUserData(user)))
                : Promise.reject("Username and password do not match")
        });
};

let checkPassword = function (userPassword, password) {
    return bcrypt.compareSync(password, userPassword);
};

const filterUserData = (userData) => {
    delete userData.password;
    return userData;
};

module.exports = (() => {
    return {
        authenticate: authenticate
    }
})();
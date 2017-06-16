const service = require('./LoginPasswordAuthenticator');
const router = require('express').Router();
const rest = require('../util/RestCommon');
const jwtAuth = require('./JwtAuthenticator');
module.exports = router;

const auth = router.route('/');

auth.post((req, res) => {
    return service
        .authenticate(req.body)
        .then((result) => {
            res.header('Set-Cookie', 'x-secure-token=' + result.token +
                '; HttpOnly' +
                '; path=/' +
                '; max-age=' + result.expires +
                '; domain: ' + domain()
            );
            res.json(result.user);
        })
        .catch((err) => rest.handleError(res, err, 401))
});

auth.delete(jwtAuth.authenticate, (req, res) => {
    res.clearCookie("x-secure-token");
    res.sendStatus(200);
});

let domain = () => "localhost";

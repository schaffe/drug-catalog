const loginPasswordAuthenticator = require('./LoginPasswordAuthenticator');
const router = require('express').Router();
const rest = require('../util/RestCommon');
const jwtAuth = require('./JwtAuthenticator');
module.exports = router;

const auth = router.route('/');

auth.post((req, res) => {
    return loginPasswordAuthenticator
        .authenticate(req.body)
        .then((result) => {
            res.header('Set-Cookie', 'x-secure-token=' + result.token
                + '; HttpOnly'
                + '; path=/'
                + '; max-age=' + result.expires
                // + '; domain=localhost.com'
            );
            res.json(result.user);
        })
        .catch((err) => rest.handleError(res, err, 401))
});

auth.delete(jwtAuth.authenticate, (req, res) => {
    res.header('Set-Cookie', 'x-secure-token=deleted'
        + '; HttpOnly'
        + '; path=/'
        + '; expires=' + new Date(1)
    );
    res.sendStatus(200);
});

let domain = () => "localhost";

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
            res.cookie("x-secure-token", result, {
                httpOnly: true,
                maxAge: 30 * 60 * 60 * 24,
                // secure: true
            });
            res.sendStatus(200);
        })
        .catch((err) => rest.handleError(res, err, 401))
});

auth.delete(jwtAuth.authenticate, (req, res) => {
    res.clearCookie("x-secure-token");
    res.sendStatus(200);
});
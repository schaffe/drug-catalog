const router = require('express').Router();
const jwtAuth = require('./auth/JwtAuthenticator');
module.exports = router;

router.get('/', function (req, res) {
    res.json({message: 'Hi! Good to see you here.'});
});

router.use('/drugs', jwtAuth.authenticate, require('./drug/controller'));
router.use('/auth', require('./auth/AuthController'));
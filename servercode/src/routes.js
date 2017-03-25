var express    = require('express');

router = express.Router();
exports.router = router;

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

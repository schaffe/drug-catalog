const router = require('express').Router();
module.exports = router;

router.get('/', function (req, res) {
    res.json({message: 'Hi! Good to see you here.'});
});

router.use('/drugs', require('drug/controller'));
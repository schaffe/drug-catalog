const service = require('./drug');
const router = require('express').Router();
module.exports = router;

const drugs = router.route('/');

drugs.get((req, res) => {
    service
        .fetch()
        .then((result) => res.json(result))
});

drugs.post((req, res) => {
    service
        .add(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.status(400).json({'error': err}))
});

router.route('/:id')
    .delete((req, res) => {
        service
            .remove(req.params.id)
            .then((result) => res.json(result))
            .catch((err) => res.status(400).json({'error': err}))
    });
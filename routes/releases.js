var express = require('express');
var router = express.Router();

var Release = require('../modules/release');

router.post('/', function (req, res, next) {
    var release = new Release({
        title: req.body.title,
        catalog: req.body.catalog
    });
    release.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved release',
            obj: result
        });
    });
});

module.exports = router;

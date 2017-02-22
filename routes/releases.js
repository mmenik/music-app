var express = require('express');
var router = express.Router();

var Release = require('../modules/release');

router.get('/', function (req, res, next) {
    Release.find()
        .exec(function (err, releases) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Get Releases',
                obj: releases
            });
        });
});

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

router.patch('/:id', function (req, res, next) {
    Release.findById(req.params.id, function (err, release) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!release) {
            return res.status(500).json({
                title: 'No release found',
                error: { message: 'Release not found' }
            });
        }
        release.title = req.body.title;
        release.catalog = req.body.catalog;
        release.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Update release',
                obj: result
            });
        });
    });
});


router.delete('/:id', function (req, res, next) {
    Release.findById(req.params.id, function (err, release) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!release) {
            return res.status(500).json({
                title: 'No release found',
                error: { message: 'Release not found' }
            });
        }
        release.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Delete release',
                obj: result
            });
        });
    });
});

module.exports = router;

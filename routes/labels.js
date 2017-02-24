var express = require('express');
var router = express.Router();

var Label = require('../modules/label');

router.get('/', function (req, res, next) {
    Label.find().populate('releases').exec(function (err, labels) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        console.log("SERVER LABELS");
        console.log(labels);
        res.status(200).json({
            message: 'Get Labels',
            obj: labels
        });
    });
});

router.post('/',function(req,res,next){
var label = new Label({
    name:req.body.name
});
label.save(function(err,result){
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved label',
            obj: result
        });
});
});

router.patch('/:id', function (req, res, next) {
    Label.findById(req.params.id, function (err, label) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!label) {
            return res.status(500).json({
                title: 'No label found',
                error: { message: 'Label not found' }
            });
        }
        label.name = req.body.name;    
        label.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Update label',
                obj: result
            });
        });
    });
});

router.delete('/:id', function (req, res, next) {
    Label.findById(req.params.id, function (err, label) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!label) {
            return res.status(500).json({
                title: 'No label found',
                error: { message: 'Label not found' }
            });
        }
        label.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Delete label',
                obj: result
            });
        });
    });
});

module.exports = router;
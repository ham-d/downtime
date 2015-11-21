var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Activity = require('../models/Activity.js');

router.get('/', function(req, res, next) {
  Activity.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

router.post('/', function(req, res, next) {
  Activity.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id', function(req, res, next) {
  Activity.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Activity.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
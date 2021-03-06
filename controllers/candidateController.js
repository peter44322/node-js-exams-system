const path = require("path");
const edge = require("edge.js");
const { Candidate } = require("../models/canidate");
var formidable = require('formidable');
var fs = require('fs');

exports.index = function(req, res) {
  res.render("index", { name: "John" });
};

exports.login = function(req, res) {
  res.send(edge.render("login"));
};

exports.register = function(req, res) {
  res.send(edge.render("register"));
};

exports.registerUser = function(req, res) {
  var form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    var oldpath = files.cv.path;
      var newpath = './public/files/' + files.cv.name;
      fs.rename(oldpath, newpath, function (err) {
        var candidateObj = new Candidate();
        candidateObj.create(fields,files.cv.name)
        candidateObj.save()
      });
  });
  res.redirect('/login');
};


exports.loginUser = function(req, res) {
  var candidateObj = new Candidate();
  candidateObj.where(req.body)
  console.log(candidateObj.id)
};

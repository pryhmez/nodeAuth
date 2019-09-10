 var router = require('express').Router();
 var express = require("express");
 var mongoose = require("mongoose");
 var userController = require('../controllers/userController');

module.exports = function(){
   var userCtl = new userController();
    router.post('/signup', userCtl.addUser);
    return router;
}
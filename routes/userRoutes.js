 var router = require('express').Router();
 var express = require("express");
 var mongoose = require("mongoose");
 var userController = require('../controllers/userController');

module.exports = function(){
    console.log("saw /signup")
   var userCtl = new userController();
    router.post('/signup', userCtl.addUser);
    router.post('/login', userCtl.login);
    
    return router;
}

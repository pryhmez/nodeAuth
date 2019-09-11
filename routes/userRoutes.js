 var router = require('express').Router();
 var express = require("express");
 var mongoose = require("mongoose");
 var userController = require('../controllers/userController');
 const checkAuth = require("../middlewares/checkAuth")

module.exports = function(){
    console.log("saw /signup")
   var userCtl = new userController();
    router.post('/signup', userCtl.addUser);
    router.post('/login', userCtl.login);
    router.post('/delete', checkAuth, userCtl.removeUser)
    
    return router;
}

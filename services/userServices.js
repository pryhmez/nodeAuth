var userModel = require('../models/users');
const bcrypt = require("bcrypt");



var addUser = function (userData, hash) {

            var newUser = new userModel(
                { 
                    name: userData.name ,
                    email : userData.email,
                    phone : userData.phone,
                    password : hash       
                }
            );
            return newUser.save();
        
}


module.exports.addUser = addUser;
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

var loginUser = function (userData) {
    return userModel.find({email: userData.email})
}




// exports.addUser = addUser;

// exports.login = login;

module.exports = {
    addUser,
    loginUser
}

// module.exports = function userFunction() {

//     this.addUser = function (userData, hash) {

//         var newUser = new userModel(
//             { 
//                 name: userData.name ,
//                 email : userData.email,
//                 phone : userData.phone,
//                 password : hash       
//             }
//         );
//         return newUser.save();
    
// }

//     this.login = (req, res) => {
        
//     }
// }
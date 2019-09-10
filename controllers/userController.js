var { addUser, loginUser } = require('../services/userServices')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = function userContoller() {

    this.addUser = (req, res) => {
        bcrypt.hash(req.body.password, 2, (err, hash) => {
            addUser(req.body, hash).then(result => {
                res.send({
                    success: true,
                    message: "user created", data: null
                })
            }).catch(error => {
                res.send({
                    success: false,
                    message: "could not not user", data: error
                })
            })
        })
        
    }

    this.login = (req, res) => {

        loginUser(req.body).then(user => {
            
            // res.send({
            //     success: true,
            //     message: "aaiit" 
            // });

            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                console.log(result.toString())
                if (err) {
                    res.send(401).json({
                        message: "Auth failed"
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        email: user[0].email,
                        userId: user[0]._id
                    }, 
                    "secret", 
                    {
                        expiresIn: "1h"
                    }
                    );

                    res.send({
                        message: "Auth successful",
                        token: token
                    });
                }
            })
        })
    }
}
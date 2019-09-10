var { addUser } = require('../services/userServices')
const bcrypt = require("bcrypt");

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
}
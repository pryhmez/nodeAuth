const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        console.log(req.body.token)
        const decoded = jwt.verify(req.body.token, "secret", null);
        console.log(decoded);
        req.userData = decoded;
        next();
    } catch (err) {
        return res.status(402).send({
            message: "Auth Failed"
        });
    }
    
} 

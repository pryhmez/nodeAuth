var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


var UserSchema = new Schema({
    
    name: { type: String, required: [false, "Full name must be provided"] },

    email:    { 
    
        type: String,     
    
        Required:  'Email address cannot be left blank.',
        validate: [validateEmail, 'Please fill a valid email address'],
             match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        index: {unique: true, dropDups: true}
        },

    phone: { type: String },

    password: {type: String, required: true},

    role: {type: String, required: true},

    createdDate: { type: Date, default: new Date() }
});

module.exports = mongoose.model('Users', UserSchema);


var mongoose = require('mongoose');

function initDb (){
    mongoose.connect("mongodb://127.0.0.1:27017/nodeAuth", {useNewUrlParser : true,
    useCreateIndex : true, useUnifiedTopology: true}, function(error){
        if(error){
            console.log("Not connected to database ", error);
        }else{
            console.log("connected to database ");
        }
    })
}

module.exports = initDb;
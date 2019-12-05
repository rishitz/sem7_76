const mongoose = require('mongoose');
var bcrypt=require('bcrypt-nodejs');

const model_name = 'users';

const schmea = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    
})
schmea.methods.hashPassword=function(password){
return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}

schmea.methods.comparePassword=function(password,hash){
return bcrypt.compareSync(password,hash)
}
module.exports = mongoose.model(model_name, schmea, model_name);


const {model, Schema } = require('mongoose')

const userSchema = new Schema ({
    name: String,
    lastname: String,
    email: String,
    password: String
    
})

const UserModel  = model('User', userSchema);

module.exports = UserModel;
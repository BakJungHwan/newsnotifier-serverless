const mongoose = require('mongoose');
const User = new mongoose.Schema({
   user_id:{type:String, required:true, unique:true},
   password:{type:String, required:true},
   api_auth:[String]
});

User.statics.findOneByUserId = user_id =>
{
    return this.findOne({user_id}).exec();
};

User.statics.create = (user_id, password) => {
    const user = new this({
        user_id,
        password
    });
    return user.save();
};

User.methods.verify = password => {
    return this.password === password;
};

module.exports = mongoose.model('User',User);
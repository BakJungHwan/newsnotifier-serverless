const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
   user_id:{type:String, required:true, unique:true},
   password:{type:String, required:true},
   auth:{type:String, default:'user'},
   api_auth:{type:[String], default:[]}

});

// mongoose.Schema에 함수를 추가할 때 () => {} 형태의 함수를 사용하면 this에 빈 객체가 추가된다.
// 그러므로 function(){} 형태로 함수를 추가하도록 해야겠다.
User.statics.findOneByUserId = function(user_id)
{
    return this.findOne({user_id}).exec();
};

User.statics.create = function(user_id, password){
    const default_api_auth = ["apis/notify_works/"+user_id];
    const user = new this({
        user_id:user_id,
        password:password,
        auth:'user',
        api_auth:default_api_auth
    });
    return user.save();
};

User.methods.verify = function(password){
    return this.password === password;
};

module.exports = mongoose.model('User',User);
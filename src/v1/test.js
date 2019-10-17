const jwt = require('jsonwebtoken');
const cookie_mod = require('cookie');
const config = require('../../config');

/*
const User = require('../../models/user');
const mongoose = require('mongoose');

const crypto = require('crypto');

let connection = null;

const connect = async () => {
    if(connection && mongoose.connection.readyState === 1) return connection;
    return connection = await mongoose.connect(config.mongodb_uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
};
*/


module.exports.request = async event => {

    const cookie = cookie_mod.parse(event.headers.Cookie);
    const decode_token = jwt.verify(cookie.halxtkToken,config.secret);
    event.decode_token = decode_token;

    return {
        statusCode : 200,
        headers:{
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"https://www.google.com",
            "Access-Control-Allow-Headers":"Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization",
            "Access-Control-Allow-Credentials":"true"
        },
        body : JSON.stringify(event)
    }
}
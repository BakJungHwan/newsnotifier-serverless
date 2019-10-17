/*
const User = require('../../models/user');
const mongoose = require('mongoose');
const config = require('../../config');
const jwt = require('jsonwebtoken');
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
    return {
        statusCode : 200,
        headers:{
            "Set-Cookie": "halxtkToken="+ token + ";httponly;secure;path=/",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin":"https://www.google.com",
            "Access-Control-Allow-Headers":"Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization"
            //"Access-Control-Allow-Credentials":"true"
        },
        body : JSON.stringify(event)
    }
}
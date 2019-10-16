const User = require('../models/user');
const mongoose = require('mongoose');
const config = require('../config');
const jwt = require('jsonwebtoken');

let connection = null;

const connect = async () => {
    if(connection && mongoose.connection.readyState === 1) return connection;
    return connection = await mongoose.connect(config.mongodb_uri);
};

module.exports.login = async event => {
    return {
        statusCode:200,
        headers:{
            'Set-Cookie':'a=Singlea',
        },
        multiValueHeaders:{
            "Set-Cookie":['b=multiB','c=multiC'],

        },
        body: JSON.stringify({

            message:'login api'
        },null,2)
    };

/*
    try{
        await connect();
    }catch(err){
        console.error('db에 연결중에 에러가 발생했습니다.');
        console.error(err);
    }

    const {user_id, password} = JSON.parse(event.body);
    const user_one_by_id = await User.findOneByUserId(user_id);
    if(user_one_by_id.verify(password)){
        return {
            statusCode:200,
            headers:{
                'Set-Cookie':'a=Singlea',
            },
            multiValueHeaders:{
                "Set-Cookie":['b=multiB','c=multiC'],

            },
            body: JSON.stringify({

                message:'login api'
            },null,2)
        };
    }
*/
    /*
    await jwt.sign(
                    {
                        db_id:user_one_by_id._id,
                        user_id:user_one_by_id.user_id,
                        api_auth:user_one_by_id.api_auth
                    },
                    config.secret,
                    {
                        expiresIn: '1d',
                        issuer:'halx.tk',
                        subject:'user'
                    }
                )

    */
};

module.exports.register = async event => {

    return {
        statusCode:200,
        body: JSON.stringify({
            message:'register api'
        },null,2)
    };
};





module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
/*
module.exports.hello_path = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: 'Go Serverless v1.0! Your function executed successfully!',
                input: event,
            },
            null,
            2
        ),
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

 */
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

module.exports.login = async event => {
    const ret = {
        statusCode:200,
        /*
        headers: {
            'Set-Cookie': 'a=Singlea;httponly;secure;path=/'
        },
        multiValueHeaders: {
            "Set-Cookie": ['b=multiB;secure', 'c=multiC;path=/'],

        },
         */
        body: {
            result:'success'
        }
    };

    try{
        await connect();

        const user_info_obj = json_parse_user_id_password(event.body,ret);
        if(!user_info_obj) return ret;
        const {user_id,password} = user_info_obj;

        const user_one_by_id = await User.findOneByUserId(user_id);
        if(!user_one_by_id || !user_one_by_id.verify(password)){
            console.log('user_info is invalid(user_id is not exist or password is not matched)');
            console.log('user_id : ' + user_id + "    password : " + password);
            ret.statusCode = 400;
            ret.body.message = 'user info is invalid';
            return before_return(ret);
        }



        const token = await jwt.sign(
            {
                db_id:user_one_by_id._id,
                user_id:user_one_by_id.user_id,
                auth:user_one_by_id.auth,
                api_auth:user_one_by_id.api_auth
            },
            config.secret,
            {
                expiresIn: '1d',
                issuer:'halx.tk',
                subject:'user'
            }
        );

        console.log('login user "'+ user_id +'" is success');
        ret.headers = {
            "Set-Cookie": "halxtkToken="+ token + ";secure;path=/",
            //"Content-Type": "application/json",
            "Access-Control-Allow-Origin":"https://www.google.com",
            "Access-Control-Allow-Credentials":"true",
            "Access-Control-Allow-Headers":"Origin,Accept,X-Requested-With,Content-Type,Access-Control-Request-Method,Access-Control-Request-Headers,Authorization"

        };
        return before_return(ret);
    }catch(err){
        console.error(err);
        ret.statusCode = 500;
        ret.body.result = 'failed';
        ret.body.message = 'internal server error';
        return before_return(ret);
    }
};

module.exports.register = async event => {
    const ret = {
        statusCode:200,
        body: {
            result:'success'
        }
    };

    try {
        await connect();

        const user_info_obj = json_parse_user_id_password(event.body,ret);
        if(!user_info_obj) return ret;
        const {user_id,password} = user_info_obj;

        await User.create(user_id, password);

        console.log('registering user "'+ user_id+'" is success');
        return before_return(ret);
    }catch(err)
    {
        console.log(err);
        ret.statusCode = 500;
        ret.body.result = 'failed';
        ret.body.message = 'internal server error';
        return before_return(ret);
    }
};





/*
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

function before_return(ret)
{
    //console.log('before_return func called, print ret');
    //console.log(ret);
    ret.body = JSON.stringify(ret.body);
    return ret;
}

function json_parse_user_id_password(event_body,api_ret)
{
    try {
        const {user_id, password} = JSON.parse(event_body);
        if(!user_id || !password){
            console.log('unable parameters');
            console.log('user_id : ' + user_id + "    password : " + password);
            api_ret.statusCode = 400;
            api_ret.body.result = 'failed';
            api_ret.body.message = 'unable parameters';
            return;
        }
        return {
            user_id:user_id,
            password:password
        };
    }catch(err)
    {
        console.error(err);
        console.log('JSON.parse(event.body) error occur.\nevent.body:\n' + event_body);
        api_ret.statusCode = 400;
        api_ret.body.result = 'failed';
        api_ret.body.message = 'Bad Request Body';
        return;
    }
}
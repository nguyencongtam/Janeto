var User = require('../models/user.model');
var crypto = require('crypto');
var jwt = require('../utils/jwt');

var secret = 'thisisasecret';

module.exports = {
    login: login,
    checkAuth: checkAuth
}

function login(email, password) {
    var hash = crypto.createHmac('sha256', secret)
        .update(password)
        .digest('hex');

    return User.findOne({
        Email: email,
        Password: hash
    })
        .then(function (user) {
            if (user) {
                return new Promise(function (resolve, reject) {
                    jwt.sign({
                        Email: user.Email
                    }, function (err, token) {
                        if (err) {
                            reject({
                                statusCode: 400,
                                message: err.message
                            });
                        } else {
                            resolve(token);
                        }
                    })
                });

            } else {
                return Promise.reject({
                    statusCode: 400,
                    message: 'Email or password is incorrect'
                });
            }
        })
        .catch(function (err) {
            return Promise.reject(err);
        })
}

function checkAuth(email) {
    console.log(email);
    return User.findOne({ Email: email.email })
        .then(function (foundUser) {
            if (foundUser) {
                return Promise.resolve(foundUser);
            } else {
                return Promise.reject({
                    message: 'Not Found'
                });
            }
        })
        .catch(function (err) {
            return Promise.reject(err);
        })
}

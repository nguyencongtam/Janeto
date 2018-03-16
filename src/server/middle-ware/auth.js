var jwt = require('./../utils/jwt');
var fs = require('fs');
var path = require('path');
var authController = require('../controller/auth.controller');

exports.auth = function () {
    return function (req, res, next) {
        var token = req.headers['token'];
        if (token) {
            jwt.verify(token, function (err, decodedData) {
                if (err) {
                    res.status(401);
                    res.json({
                        message: 'Invalid Token'
                    });
                } else {
                    var email = decodedData.Email;

                    authController.checkAuth({
                        email: decodedData.Email
                    })
                        .then(function (user) {
                            req.user = user;
                            next();
                        })
                        .catch(function (err) {
                            res.status(401);
                            res.json({
                                message: 'Invalid Token, User not found'
                            });
                        });
                }
            })
        } else {
            res.status(401);
            res.json({
                message: "Not Authorized"
            });
        }
    }
}
var router = require('express').Router();
var auth = require('../middle-ware/auth');
var userController = require('../controller/user.controller');
var User = require('../models/user.model');

router.post('/', createUser);
router.get('/', getUser);
router.put('/:id', auth.auth(), updateUser);
router.delete('/:id', auth.auth(), deleteUser);

router.post('/savetypefood/:id', auth.auth(), saveTypeFood);

module.exports = router;

function createUser(req, res, next) {
    var newUser = req.body;
    if (!newUser.Name) {
        next({
            statusCode: 400,
            message: "Name is required"
        })
    } else if (!newUser.Email) {
        next({
            statusCode: 400,
            message: "Email is required"
        })
    } else if (!newUser.Password) {
        next({
            statusCode: 400,
            message: "Password is required"
        })
    } else if (!newUser.Sex) {
        next({
            statusCode: 400,
            message: "Sex is required"
        })
    } else if (!newUser.Address) {
        next({
            statusCode: 400,
            message: "Address is required"
        })
    } else if (!newUser.Phone) {
        next({
            statusCode: 400,
            message: "Phone is required"
        })
    }
    else {
        userController.createUser(newUser)
            .then(function (user) {
                res.json(user);
            })
            .catch(function (err) {
                next(err);
            })
    }
}

function getUser(req, res, next) {
    userController.getUsers()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            next(err);
        })
}

function updateUser(req, res, next) {
    var id = req.params.id;
    var user = req.body;
    user._id = id;
    userController.updateUser(user)
        .then(function (user) {
            res.send(user);
        })
        .catch(function (err) {
            next(err);
        })
}

function deleteUser(req, res, next) {
    var id = req.params.id;
    userController.deleteUser(id)
        .then(function (user) {
            res.send(user);
        })
        .catch(function (err) {
            next(err);
        })
}

function saveTypeFood(req, res, next) {
    var typeId = req.params.id;
    var emailUser = req.emailUser;

    User.findOne({ Email: emailUser })
    .then(user => {
        //console.log(user._id);
        userController.saveTypeFood(typeId, user._id)
        .then(function (type) {
            res.send(type);
        })
        .catch(function (err) {
            next(err);
        })

    })
    .catch(err => {
        console.log(err.message);
    })
}        
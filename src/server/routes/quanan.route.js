var router = require('express').Router();
var quananController = require('../controller/quanan.controller');

router.post('/', createQuanAn);
router.get('/', getQuanAn);

module.exports = router;

function createQuanAn(req, res, next) {
    var newQuanAn = req.body;
   // console.log(newQuanAn);
    if (!newQuanAn.tenquan) {
        next({
            statusCode: 401,
            message: "name is required"
        })
    } 
    else if (!newQuanAn.quan) {
        next({
            statusCode: 402,
            message: "District is required"
        })
    } 
    else if (!newQuanAn.thanhpho) {
        next({
            statusCode: 403,
            message: "City is required"
        })
    }
    else if (!newQuanAn.datnuoc) {
        next({
            statusCode: 404,
            message: "Country is required"
        })
    } 
    else if (!newQuanAn.lat) {
        next({
            statusCode: 405,
            message: "iat is required"
        })
    }
    else if (!newQuanAn.lng) {
        next({
            statusCode: 406,
            message: "ing is required"
        })
    }
    else {
        quananController.createQuanan(newQuanAn)
            .then(function (quanan) {
                res.json(quanan);
            })
            .catch(function (err) {
                next(err);
            })
    }

}

function getQuanAn(req, res, next) {
    quananController.getQuanan()
    .then(function (quanan) {
        res.send(quanan);
    })
    .catch(function (err) {
        next(err);
    })
}
var router = require('express').Router();
var quananController = require('../controller/quanan.controller');

router.post('/', createQuanAn);
router.get('/', getQuanAn);

module.exports = router;

function createQuanAn(req, res, next) {
    var newQuanAn = req.body;
    if (!newQuanAn.TenQuan) {
        next({
            statusCode: 400,
            message: "name is required"
        })
    } 
    else if (!newQuanAn.Quan) {
        next({
            statusCode: 401,
            message: "District is required"
        })
    } 
    else if (!newQuanAn.ThanhPho) {
        next({
            statusCode: 402,
            message: "City is required"
        })
    }
    else if (!newQuanAn.DatNuoc) {
        next({
            statusCode: 403,
            message: "Country is required"
        })
    } 
    else if (!newQuanAn.Iat) {
        next({
            statusCode: 405,
            message: "iat is required"
        })
    }
    else if (!newQuanAn.Lng) {
        next({
            statusCode: 406,
            message: "ing is required"
        })
    }
    else {
        quananController.createQuanAn(newQuanAn)
            .then(function (quanan) {
                res.json(quanan);
            })
            .catch(function (err) {
                next(err);
            })
    }

}

function getQuanAn(req, res, next) {
    quananController.getQuanAn()
    .then(function (quanan) {
        res.send(quanan);
    })
    .catch(function (err) {
        next(err);
    })
}
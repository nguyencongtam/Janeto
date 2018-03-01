var QuanAn = require('../models/quanan.model');

module.exports = {
    getQuanAn: getQuanAn,
    createQuanAn: createQuanAn
}

function createQuanAn(newQuanAn) {
    var quanan = new QuanAn(newQuanAn);
    return quanan.save()
    .then(function (quanan) {
        return Promise.resolve(quanan);
    })
    .catch(function (err) {
        return Promise.reject(err);
    })
}

function getQuanAn() {
    return QuanAn.find()
    .then(function (quanan) {
        return Promise.resolve(quanan);
    })
    .catch(function (err) {
        return Promise.reject(err);
    })
}
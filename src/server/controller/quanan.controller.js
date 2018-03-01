var QuanAn = require('../models/quanan.model');

module.exports = {
    getQuanan: getQuanan,
    createQuanan: createQuanan
}

function getQuanan() {
    return QuanAn.find()
    .then(function (quanan) {
        return Promise.resolve(quanan);
    })
    .catch(function (err) {
        return Promise.reject(err);
    })
}

function createQuanan(newQuanAn) {
    var quanan = new QuanAn(newQuanAn);
    return quanan.save()
    .then(function (quanan) {
        return Promise.resolve(quanan);
    })
    .catch(function (err) {
        return Promise.reject(err);
    })
}
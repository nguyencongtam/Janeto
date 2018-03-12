var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quananSchema = new Schema({
    // _id: {
    //     type: String
    // },
    TenQuan: {
        type: String,
        required: true
    },
    Quan: {
        type: String,
        required: true
    },
    ThanhPho: {
        type: String,
        required: true
    },
    DatNuoc: {
        type: String,
        required: true
    },
    MoTa: {
        type: String,
    },
    Image: {
        type: String,
    },
    Stat: {
        type: String,
    },
    Iat: {
        type: Number,
        required: true
    },
    Lng: {
        type: Number,
        required: true
    },
    Party: {
        _id: {
            type: String,
            required: true
        },
        Leader: {
            type: String,
            required: true
        },
        Title: {
            type: String,
            required: true
        },
    }
});

quananSchema.index({ TenQuan: 'text' });

var QuanAn = mongoose.model('quanan', quananSchema);
module.exports = QuanAn;

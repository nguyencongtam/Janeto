var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quananSchema = new Schema({
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
    MinPrice: {
        type: Number,
        required: true
    },
    MinPrice: {
        type: Number,   
        required: true
    },
    TimeStart: {
        type: Number,
        required: true
    },
    TimeEnd: {
        type: Number,
        required: true
    },
    DateTime: {
        type: Date,
        //required: true
    },
    Rate: {
        type: Number,
        required: true
    }, 
});

quananSchema.index({ TenQuan: 'text' });

var QuanAn = mongoose.model('quanan', quananSchema);
module.exports = QuanAn;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quananSchema = new Schema({
    tenquan: {
        type: String,
        required: true
    },
    quan: {
        type: String,
        required: true
    },
    thanhpho: {
        type: String,
        required: true
    },
    datnuoc: {
        type: String,
        required: true
    },
    mota: {
        type: String
        // required: true
    },
    image: {
        type: String
        // required: true
    },
    stat: {
        type: String
        // required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    }
});

quananSchema.index({ tenquan: 'text' });

var QuanAn = mongoose.model('quanan', quananSchema);
module.exports = QuanAn;

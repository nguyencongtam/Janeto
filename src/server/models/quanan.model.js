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
        type: String,
    },
    image: {
        type: String,
    },
    stat: {
        type: String,
    },
    iat: {
        type: Number,
        required: true
    },
    ing: {
        type: Number,
        required: true
    }
});

quananSchema.index({ tenquan: 'text' });

var QuanAn = mongoose.model('quanan', quananSchema);
module.exports = QuanAn;

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Image: {
        type: String,
    },
    Rate: {
        type: Number,
    },
    Image: {
        type: String,
    },
    Stat: {
        type: String,
    },
    Detail: {
        type: String,
    },
    Sex: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    TypeFood: [{
        typefoodId: String
    }],
    Friend: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
});

userSchema.index({ Name: 'text', Phone: 'text' });

var User = mongoose.model('user', userSchema);
module.exports = User;

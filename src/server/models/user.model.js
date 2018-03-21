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
    },
    Phone: {
        type: Number,
    },
    TypeFood: [{
        typefoodId: String
    }],
    Friend: [{
        friendId: String
    }]
});

userSchema.index({ Name: 'text', Phone: 'text' });

var User = mongoose.model('user', userSchema);
module.exports = User;

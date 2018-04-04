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
        type: String
    },
    Address: {
        type: String,
    },
    Phone: {
        type: Number,
    },
    FavoriteFood: {
        type: String
    },
    Birthday: {
        type: String
    },
    TypeFood: [{
        typefoodId: String
    }],
    Friend: [{
        friendId: String
    }],
    Provider: {
        type: String
    },
    IncommingRequests: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    SentRequests: [{ type: Schema.Types.ObjectId, ref: 'User' }]
    // TypeFood: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'TypeFood'
    // }],
    // Friend: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Friend'
    // }]
});

userSchema.index({ Name: 'text', Phone: 'text' });

var User = mongoose.model('user', userSchema);
module.exports = User;

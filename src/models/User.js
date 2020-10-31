const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            minlength: 1,
            maxlength: 255,
            required: true
        },
        userEmail: {
            type: String,
            minlength: 1,
            maxlength: 255,
            required: true,
            unique: true
        },
        userPassword: {
            type: String,
            minlength: 1,
            maxlength: 255,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', UserSchema);
module.exports.UserSchema = UserSchema;
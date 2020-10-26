const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
    {
        blogTitle: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 255
        },
        blogDescription: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Blog', BlogSchema);
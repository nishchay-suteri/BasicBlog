const mongoose = require("mongoose");
const UserSchema = require("./User").UserSchema;

const BlogSchema = new mongoose.Schema(
  {
    blogTitle: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    blogDescription: {
      type: String,
      required: true,
    },
    createdBy: {
      _id: {
        type: mongoose.ObjectId,
      },
      userName: {
        type: String,
        minlength: 1,
        maxlength: 255,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blog", BlogSchema);

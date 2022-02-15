const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    hash_password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.virtual("password").set(function (password) {
  this.hash_password = bcrypt.hashSync(password, 8);
});

userSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.hash_password);
  },
};

module.exports = mongoose.model("User", userSchema);

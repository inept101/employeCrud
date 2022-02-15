const mongoose = require("mongoose");

const EmpSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    age: Number,
    salary: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", EmpSchema);

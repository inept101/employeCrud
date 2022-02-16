import mongoose from "mongoose";

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

export default mongoose.model("Employee", EmpSchema);

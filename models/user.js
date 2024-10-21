const mongoose = require("mongoose");

const schema = mongoose.Schema({
  lastName: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "USER",
    required: true,
  },
  // refreshToken: String,
});

const model = mongoose.models?.User || mongoose.model("User", schema);

export default model;

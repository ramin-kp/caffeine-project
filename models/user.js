const mongoose = require("mongoose");

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
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

const model = mongoose.models.User || mongoose.model("User", schema);

export default model;

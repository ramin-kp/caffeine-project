const mongoose = require("mongoose");

require("./Product");

const schema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  recommend: {
    type: String,
    required: true,
  },
  useful: {
    type: Number,
    default: 0,
  },
  unhelpful: {
    type: Number,
    default: 0,
  },
  isAccept: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: () => Date.now(),
    immutable: false,
  },
  productID: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    required: true,
  },
});

const model = mongoose.models.Comment || mongoose.model("Comment", schema);

export default model;

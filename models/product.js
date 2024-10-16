const mongoose = require("mongoose");
require("./comment");

const schema = mongoose.Schema({
  nameFa: {
    type: String,
    required: true,
  },
  nameEn: {
    type: String,
    required: true,
  },
  shortDescription: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  birthplace: {
    type: String,
    required: true,
  },
  Ingredients: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    default: 5,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  comments: {
    type: [{ type: mongoose.Types.ObjectId }],
    ref: "Comment",
  },

  //   category: {
  //     type: String,
  //     required: true,
  //   },
  //   feature: { type: [String], required: true },
});

const model = mongoose.models.Product || mongoose.model("Product", schema);

export default model;

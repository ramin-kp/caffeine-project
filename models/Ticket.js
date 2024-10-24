const { default: mongoose } = require("mongoose");
require("./User");
require("./Department");
require("./SubDepartment");

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    hasAnswer: {
      type: Boolean,
      default: false,
      required: false,
    },
    isAnswer: {
      type: Boolean,
      default: false,
      required: false,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    department: {
      type: mongoose.Types.ObjectId,
      ref: "Department",
      required: false,
    },
    subDepartment: {
      type: mongoose.Types.ObjectId,
      ref: "SubDepartment",
      required: false,
    },
    priority: {
      type: Number,
      default: 1,
      enum: [1, 2, 3],
    },
    mainAnswer: {
      type: mongoose.Types.ObjectId,
      ref: "Ticket",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.Ticket || mongoose.model("Ticket", schema);
export default model;

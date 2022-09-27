const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String, required: true },

    price: Number,

    size: String,

    supplier: String,

    desp: String,
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Product", productSchema);

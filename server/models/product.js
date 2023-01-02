const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  brandName: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  size: {
    type: String,
    required: false,
  },
  imgUrl: {
    type: String,
    required: false,
  },
  dateAdded: {
    type: Date,
    required: true,
    default: Date.now,
  },
  handpicked: { type: Boolean },
});
module.exports = mongoose.model("product", productSchema);

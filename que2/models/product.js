const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  pname: String,
  cname: String,
  pprice: Number,
  pqty: Number,
  pdesc: String,
  pimg: String,
});

module.exports = mongoose.model("productModel", productSchema);

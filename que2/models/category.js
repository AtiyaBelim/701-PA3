const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  cname: String
});

module.exports = mongoose.model("categoryModel", categorySchema);

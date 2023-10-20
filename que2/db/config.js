const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/productDB")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;

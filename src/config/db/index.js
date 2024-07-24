const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/courses_dev");
    console.log('connect ok');
  } catch (error) {
    console.log('connect error');
  }
}

module.exports = { connect };

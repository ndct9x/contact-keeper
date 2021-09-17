const mongoose = require('mongoose');
const config = require('config');
const dbConnection = process.env.CONNECTION_STRING

const connectDb = async () => {
  try {
    await mongoose.connect(dbConnection, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('DB Connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDb;

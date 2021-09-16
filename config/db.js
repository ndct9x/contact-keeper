const mongoose = require('mongoose');
const config = require('config');
const dbConnection = config.get('mongoURI');

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

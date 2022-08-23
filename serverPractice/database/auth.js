const mongoose = require("mongoose");

const connectDatabase = async () => {
  const checkConnection = await mongoose.connect(process.env.DATABASE_URL);

  console.log(`Database started with host ${checkConnection.connection.host}`);
};

module.exports = connectDatabase;

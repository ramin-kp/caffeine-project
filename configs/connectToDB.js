const mongoose = require("mongoose");

const connectToDB = async () => {
  if (mongoose.connections[0].readyState) {
    return false;
  } else {
    try {
      await mongoose.connect(process.env.DATABASE_URL);
      console.log("connected to coffee-next database");
    } catch (error) {
      console.log("connected to database is error", error);
    }
  }
};

export default connectToDB;

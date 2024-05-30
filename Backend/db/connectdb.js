import mongoose from "mongoose";
const connectDB = () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/test");
    console.log("Connection Established");
  } catch (err) {
    console.log("Error while connecting to MongoDB");
  }
};

export default connectDB;

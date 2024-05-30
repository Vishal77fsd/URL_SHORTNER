import mongoose from "mongoose";
const { Schema } = mongoose;

const mapSchema = new Schema({
  url: {
    type: "String",
    unique: true,
    required: true,
  },
  shortURL: {
    type: "String",
    unique: true,
    required: true,
  },
});

const mapURL = mongoose.model("mapURL", mapSchema);

export default mapURL;

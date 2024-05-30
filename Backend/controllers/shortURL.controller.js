import mapURL from "../models/mapURL.js";
import hash from "hash-it";

const shortURL = async (req, res) => {
  try {
    const url = req.body.url;
    console.log(url);

    const result = await mapURL.findOne({ url });
    if (result !== null) {
      res.status(200).json({
        message: "URL Already Registered In The Database.",
        info: result,
      });
    } else {
      console.log(hash(url));
      const newMapURL = await mapURL.create({
        url,
        shortURL: hash(url),
      });
      res.status(200).json({
        message: "Link Created",
        info: newMapURL,
      });
    }
  } catch (error) {
    console.log("Error occured in catch");
    res.status(200).json({ message: error });
  }
};

export default shortURL;

import mapURL from "../models/mapURL.js";

const redirectURL = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await mapURL.findOne({ shortURL: id });
    if (result !== null) {
      return res.redirect(result.url);
    }
    return res.status(200).json({ message: result });
  } catch (error) {
    console.log("Error occured in redirect URL Controller");
    res.status(200).json({ message: error });
  }
};
export default redirectURL;

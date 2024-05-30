const checkURL = (req, res, next) => {
  const url = req.body.url;
  const urlPattern = /^(ftp|http|https):\/\/(?!localhost)([^ "]+)$/;

  if (!url) {
    return res.status(200).json({ message: "Invalid URL Given" });
  }
  const isValid = urlPattern.test(url);
  if (!isValid) {
    return res.status(200).json({ message: "Invalid URL Given" });
  }
  next();
};
export default checkURL;

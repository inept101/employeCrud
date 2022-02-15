const jwt = require("jsonwebtoken");

exports.requireSignin = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const admin = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = admin;
  } else {
    return res.status(400).json({ message: "Authorization required" });
  }
  next();
};

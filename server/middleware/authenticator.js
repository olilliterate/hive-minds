const jwt = require("jsonwebtoken");

function authenticator(req, res, next) {
  const token = req.headers["authorization"];

  if (token) {
    jwt.verify(token, process.env.SECRET_TOKEN, (err, data) => {
      if (err) {
        res.status(403).json({ err: "Invalid token" });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(403).json({ err: "No token provided" });
  }
}

module.exports = authenticator;

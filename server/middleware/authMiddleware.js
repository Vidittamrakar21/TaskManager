
const jwt = require('jsonwebtoken');


const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403); // invalid token

      req.user = user; // attach decoded user info to request
      next();
    });
  } else {
    res.sendStatus(401); // no token
  }
};

module.exports = authenticateJWT;

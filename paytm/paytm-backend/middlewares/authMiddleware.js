require("dotenv").config();
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(403).json({
      message: 'Invalid token.'
    })
  }

  const token = authHeader.split(' ')[1]
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (decode.userId) {
      req.userId = decode.userId;
      next();
    } else {
      return res.status(403).json({
        message: 'error while saving userId in request.'
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: 'something went wrong in authMiddleware.'
    });
  }
}

module.exports = {
  authMiddleware
}

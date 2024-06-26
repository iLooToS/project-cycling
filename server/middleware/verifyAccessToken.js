require('dotenv').config();
const jwt = require('jsonwebtoken');
function verifyAccessToken(req, res, next) {
  try {
    const accessToken = req.headers.authorization.split(' ')[1];
    const { user } = jwt.verify(accessToken, process.env.ACCESS_TOKEN);

    res.locals.user = user;

    next();
  } catch (error) {
    console.log('Invalid access token', {message: error});
    res.status(403).send('Invalid access token');
  }
}

module.exports = verifyAccessToken;
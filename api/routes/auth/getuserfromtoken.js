const jwt = require('jsonwebtoken');
const User = require('../../models/User');
module.exports = async (req, res) => {
  try {
    const token = jwt.verify(req.params.token, process.env.JWT_SECRET);
    if (!token) return res.send({ success: false, data: 'No token found.' });

    const user = await User.findOne({ email: token.user.email });

    if (user) {
      return res.send({ success: true, data: user });
    } else {
      return res.send({ success: false, data: 'No token' });
    }
  } catch (err) {
    return res.send({ success: false, data: 'Server Error' });
  }
};

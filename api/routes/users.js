const express = require('express');
const router = express.Router();
const User = require('../models/User');
const isLoggedIn = require('../middleware/isLoggedIn');

const Profile = async (req, res) => {
  try {
    const { age, language } = req.body;
    const user = await User.updateOne(
      { email: req.user.email },
      {
        $set: {
          age,
          language,
        },
      }
    );
    return res.send({ success: true, data: user });
  } catch (err) {
    return res.send({ success: false, data: 'Server Error' });
  }
};

router.put('/profile', isLoggedIn, Profile);

module.exports = router;

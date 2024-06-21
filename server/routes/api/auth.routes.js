const router = require('express').Router();
const { User } = require('../../db/models');
const bcrypt = require('bcrypt');
const generateTokens = require('../../utils/authUtils');

router.post('/registration', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      res.status(400).json({ message: 'Complete all fields' });
      return;
    }

    const userInDb = await User.findOne({ where: { email } });

    if (userInDb) {
      res
        .status(400)
        .json({ message: 'This user is already registered' });
      return;
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashPassword });

    delete user.dataValues.password;

    const { accessToken, refreshToken } = generateTokens({ user });

    if (user) {
      res
        .status(201)
        .cookie('refresh', refreshToken, { httpOnly: true })
        .json({ message: 'success', user, accessToken });
      return;
    }

    res.status(400).json({ message: 'Try again' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post('/authorization', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email.trim() === '' || password.trim() === '') {
      res.status(400).json({ message: 'Fill in all fields' });
      return;
    }
    const user = await User.findOne({ where: { email } });
    if (user) {                                    
      const isCompare = await bcrypt.compare(password, user.password);
      if (isCompare) {

        delete user.dataValues.password;

        const { accessToken, refreshToken } = generateTokens({ user });
        console.log(refreshToken);
        res
          .status(200)
          .cookie('refresh', refreshToken, { httpOnly: true })
          .json({ message: 'success', accessToken, user });
        return;
      }
      res.status(400).json({ message: 'Email or password does not match' });
      return;
    }

    res.status(400).json({ message: 'Email or password does not match' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post('/logout', (req, res) => {
  res.locals.user = undefined;
  res.status(200).clearCookie('refresh').json({ message: 'success' });
});

module.exports = router;
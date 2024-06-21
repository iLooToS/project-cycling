const router = require('express').Router();
const {User} = require('../../db/models')

router.get('/', async (req, res)=>{
    try {
        const users = await User.findAll()
        console.log(users)
        res.status(200).json({ message: 'success', users })
    } catch ({message}) {
        res.json({ error: message });
    }
}
)
router.get('/:userId', async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findOne({ where: { id: userId } });
      res.status(200).json({ message: 'success', user });
    } catch ({ message }) {
      res.json({ error: message });
    }
  });
r
module.exports = router
const router = require('express').Router();
const {User} = require('../../db/models');
const verifyAccessToken = require('../../middleware/verifyAccessToken');

router.get('/', async (req, res)=>{
    try {
        const users = await User.findAll({ attributes: ['name']})
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
  })

  router.put('/', verifyAccessToken, async (req, res) => {
    try {
      const { name, email, userId} = req.body;
      console.log({name, email, userId});
//   const oldUser = findOne({where: {email}});
      // возращает массив с числом
      const result = await User.update(
        {name, email},
        { where: { id: userId } }
      );
      console.log(result);
      console.log(result);
      // проверили, что все хорошо([1])
      if (result[0] > 0) {
        console.log(userId);
        const userNew = await User.findOne({ where: { id: userId } });
        console.log(userNew);
        // завершаем ответ
        res.status(200).json({ message: 'success' });
        return;
      }
  
      res.status(400).json({ message: 'повторите попытку ' });
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  });

module.exports = router

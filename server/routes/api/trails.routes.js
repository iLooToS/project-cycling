const router = require('express').Router();
const {Trail} = require('../../db/models')
const verifyAccessToken = require('../../middleware/verifyAccessToken')
require('dotenv').config();

router.post('/', verifyAccessToken , async (req,res)=>{
    try {
        const user = res.locals
        const {title,description,userId } = req.body
        const trail = await Trail.create({
            title,
            description,
            userId : user.id
        })
        if (trail) {
            res.status(200).json({ message: 'success', trail });
            return;
          }
      
          res.status(400).json({ message: 'нельзя' });
        } catch ({ message }) {
          res.json({ error: message });
        }
    
})

router.delete('/' , verifyAccessToken, async (req, res)=>{
try {
    
    const { user } = res.locals;
    const { trailId } = req.params;
    const result = await Trail.destroy({
      //                     проверка на идора
      where: { id: trailId, userId: user.id },
    });

    if (result > 0) {
      res.status(200).json({ message: 'success' });
      return;
    }

    res.status(400).json({ message: 'Нельзя' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/", async (req, res) => {
  try {
    const trails = await Trail.findAll();
    res.status(200).json({ message: "success", trails });
  } catch ({ message }) {
    res.json({ error: message });
  }
});

router.get('/:trailId', async (req, res) => {
    try {
      const { trailId } = req.params;
      const trail = await Trail.findOne({ where: { id: trailId } });
      res.status(200).json({ message: 'success', trail });
    } catch ({ message }) {
      res.json({ error: message });
    }
  });

module.exports = router;

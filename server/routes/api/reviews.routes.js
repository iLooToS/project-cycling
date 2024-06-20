const router = require("express").Router();
const { Review } = require("../../db/models");
const verifyAccessToken = require('../../middleware/verifyAccessToken')
require('dotenv').config();

router.get("/", async (req, res) => {
  try {
    const reviewer = await Review.findAll();
    res.status(200).json({ message: "success", reviewer });
  } catch ({ message }) {
    res.json({ error: message });
  }
});

router.get('/:trailId', async (req, res) => {
    try {
      const { trailId } = req.params;
      const reviews = await Review.findAll({ where: { trailId: trailId } });
      res.status(200).json({ message: 'success', reviews });
    } catch ({ message }) {
      res.json({ error: message });
    }
  });

  router.post('/', verifyAccessToken, async (req, res) => {
    try {
      const { user } = res.locals;
      const { trailId, userId, rating, comment  } = req.body;
  
      const review = await Review.create({
        trailId,
        userId: user.id,
        rating,
        comment,
      });
  
      if (review) {
        res.status(200).json({ message: 'success', review });
        return;
      }
  
      res.status(400).json({ message: 'еще разок оптимист' });
    } catch ({ message }) {
      res.json({ error: message });
    }
  });



module.exports = router;

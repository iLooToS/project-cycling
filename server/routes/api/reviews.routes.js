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
      const { trailId, userId, comment  } = req.body;
  
      const review = await Review.create({
        trailId,
        userId: user.id,
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

  router.delete('/:commentId', verifyAccessToken, async (req, res) => {
    try {
      const { user } = res.locals;
      const { commentId } = req.params;
      const result = await Review.destroy({
        //                     проверка на идора
        where: {userId: user.id },
      });
  
      if (result > 0) {
        res.status(200).json({ message: 'success' });
        return;
      }
  
      res.status(400).json({ message: 'Не твоя, вот и бесишься' });
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  });

  router.put('/:commentId', verifyAccessToken, async (req, res) => {
    try {
      const { user } = res.locals;
      const { commentId } = req.params;
      const { trailId, userId, comment } = req.body;
  
      // возращает массив с числом
      const result = await Movie.update(
        { title, year, rating, director, genreId },
        { where: { id: movieId, userId: user.id } }
      );
      // проверили, что все хорошо([1])
      if (result[0] > 0) {
        const movie = await Movie.findOne({ where: { id: movieId } });
        // завершаем ответ
        res.status(200).json({ message: 'success', movie });
        return;
      }
  
      res.status(400).json({ message: 'Не твоя, вот и бесишься' });
    } catch ({ message }) {
      res.status(500).json({ error: message });
    }
  });



module.exports = router;

const router = require("express").Router();
const { Review } = require("../../db/models");

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

module.exports = router;

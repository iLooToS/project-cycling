const router = require("express").Router();
const { Trail } = require("../../db/models");

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

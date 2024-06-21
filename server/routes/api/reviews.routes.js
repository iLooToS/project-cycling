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

router.get('/:reviewerId', async (req, res) => {
    try {
      const { revieweId } = req.params;
      const reviews = await Review.findAll({ where: { id: revieweId } });
      res.status(200).json({ message: 'success', reviews });
    } catch ({ message }) {
      res.json({ error: message });
    }
}
  
)




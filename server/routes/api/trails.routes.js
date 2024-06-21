const router = require("express").Router();
const { Trail, Waypoint } = require("../../db/models");
const verifyAccessToken = require("../../middleware/verifyAccessToken");
require("dotenv").config();

router.post("/", verifyAccessToken, async (req, res) => {
  try {
    const user = res.locals;
    const {
      title,
      description,
      firstPointLatitude,
      firstPointLongitude,
      secondPointLatitude,
      secondPointLongitude,
    } = req.body;
    console.log(req.body);
    const trail = await Trail.create({
      title,
      description,
      userId: user.user.id,
    });
    if (trail) {
      const waypointFirst = await Waypoint.create({
        latitude: Number(firstPointLatitude),
        longitude: Number(firstPointLongitude),
        sequence: 1,
        trailId: trail.id,
      });
      if (waypointFirst) {
        const waypointSecond = await Waypoint.create({
          latitude: Number(secondPointLatitude),
          longitude: Number(secondPointLongitude),
          sequence: 2,
          trailId: trail.id,
        });
        if (waypointSecond) {
          const waypoint = await Waypoint.findAll();
          const trails = await Trail.findAll();
          if (trails && waypoint) {
            res.status(200).json({ message: "success", trails, waypoint });
            return;
          }
        }
      }
    }

    res.status(400).json({ message: "Fill in all fields" });
  } catch ({ message }) {
    res.json({ error: message });
  }
});

router.delete("/:trailId", verifyAccessToken, async (req, res) => {
  try {
    const { user } = res.locals;
    const { trailId } = req.params;
    const result = await Trail.destroy({
      where: { id: trailId, userId: user.id },
    });

    if (result > 0) {
      res.status(200).json({ message: "success" });
      return;
    }

    res.status(400).json({ message: "Нельзя" });
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

router.get("/:trailId", async (req, res) => {
  try {
    const { trailId } = req.params;
    const trail = await Trail.findOne({ where: { id: trailId } });
    res.status(200).json({ message: "success", trail });
  } catch ({ message }) {
    res.json({ error: message });
  }
});

  router.put('/:trailId', verifyAccessToken, async (req, res)=>{
    try {
      const { user } = res.locals;
      const { trailId } = req.params;
      const { title,description,userId } = req.body;
  
      
      const result = await Trail.update(
        { title,description},
        { where: { id: trailId, userId: user.id } }
      );
      if (result[0] > 0) {
        const trail = await Trail.findOne({ where: { id: trailId } });
      
        res.status(200).json({ message: 'success', trail });
        return;
      }
      res.status(400).json({ message: 'нельзя' })
    }   catch ({ message }) {
      res.status(500).json({ error: message });
    }
  })

module.exports = router;

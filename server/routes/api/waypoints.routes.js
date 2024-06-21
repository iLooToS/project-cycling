const router = require("express").Router();
const { Waypoint } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const waypoint = await Waypoint.findAll();
    res.status(200).json({ message: "success", waypoint });
  } catch ({ message }) {
    res.json({ error: message });
  }
});

router.get('/:waypointId', async (req, res) => {
    try {
      const {waypointId} = req.params;
      const trails = await Waypoint.findAll({ where: { Id: waypointId } });
      res.status(200).json({ message: 'success', trails });
    } catch ({ message }) {
      res.json({ error: message });
    }
  });

router.post('/', verifyAccessToken , async (req,res)=>{
  try {
      const trail = res.locals
      const {latitude,longitude,sequence,  trailId } = req.body
      const waypoint = await Waypoint.create({
        latitude,
        longitude,
        sequence,
        trailId : trail.id
      })
      if (trail) {
          res.status(200).json({ message: 'success', waypoint });
          return;
        }
    
        res.status(400).json({ message: 'нельзя' });
      } catch ({ message }) {
        res.json({ error: message });
      }
  
})


module.exports = router;

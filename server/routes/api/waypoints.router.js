const router = require('express').Router();
const {Waypoint} = require('../../db/models')

router.get('/', async (req, res)=>{
    try {
        const waypoint = await Waypoint.findAll()
        res.status(200).json({ message: 'success', waypoint })
    } catch ({message}) {
        res.json({ error: message });
    }
}
)




module.exports = router
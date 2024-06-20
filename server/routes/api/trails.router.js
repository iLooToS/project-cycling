const router = require('express').Router();
const {Trail} = require('../../db/models')

router.get('/', async (req, res)=>{
    try {
        const trail = await Trail.findAll()
        res.status(200).json({ message: 'success', trail })
    } catch ({message}) {
        res.json({ error: message });
    }
}
)



module.exports = router
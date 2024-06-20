const router = require('express').Router();
const {Review} = require('../../db/models')

router.get('/', async (req, res)=>{
    try {
        const reviewer = await Review.findAll()
        res.status(200).json({ message: 'success', reviewer })
    } catch ({message}) {
        res.json({ error: message });
    }
}
  
)

router.post('/', verifyAccessToken , async (req,res)=>{
    try {
        const user = res.locals
        const trail = res.locals
        const {rating,comment, userId ,trailId} = req.body
        const reviewer = await Review.create({
            rating,
            comment,
            userId : user.id,
            trailId : trail.id
            // userId : user.id
        })
        if (reviewer) {
            res.status(200).json({ message: 'success', reviewer });
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
        const { reviewer } = req.params;
        const result = await Review.destroy({
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






module.exports = router
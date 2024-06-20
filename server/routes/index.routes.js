const router = require('express').Router();
const routerUser = require('./api/user.router')
const routerRoute = require('./api/trails.router')
const routerWaypoint = require('./api/waypoints.router')
const routerReviews = require('./api/waypoints.router')
const routerAuth = require('./api/auth.routes')

router.use('/users', routerUser)
router.use('/trails', routerRoute)
router.use('/waypoints', routerWaypoint)
router.use('/reviews', routerReviews)
router.use('/auth', routerAuth)



module.exports = router;

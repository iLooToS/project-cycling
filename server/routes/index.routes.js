const router = require('express').Router();
const routerUser = require('./api/user.routes')
const routerRoute = require('./api/trails.routes')
const routerWaypoint = require('./api/waypoints.routes')
const routerReviews = require('./api/waypoints.routes')
const routerAuth = require('./api/auth.routes')

router.use('/users', routerUser)
router.use('/trails', routerRoute)
router.use('/waypoints', routerWaypoint)
router.use('/reviews', routerReviews)
router.use('/auth', routerAuth)



module.exports = router;

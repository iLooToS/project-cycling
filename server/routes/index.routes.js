const router = require("express").Router();

const routerUser = require("./api/user.routes");
const routerRoute = require("./api/trails.routes");
const routerWaypoint = require("./api/waypoints.routes");
const routerReviews = require("./api/reviews.routes");
const routerAuth = require("./api/auth.routes");
const tokensRoutes = require("./api/tokens.routes");

router.use("/users", routerUser);
router.use("/trails", routerRoute);
router.use("/waypoints", routerWaypoint);
router.use("/tokens", tokensRoutes);
router.use("/reviews", routerReviews);
router.use("/auth", routerAuth);

module.exports = router;

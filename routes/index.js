const express = require("express");
const router = express.Router();
const usersRouter = require("./users.js");
const placesRouter = require("./places.js");
const teamsRouter = require("./teams.js");
// const openPlacesRouter = require('./openPlaces.js');
//const mypagesRouter = require('./mypages.js');
const reservationsRouter = require("./reservations.js");

//전역 미들웨어

router.use("/users", usersRouter);
router.use("/places", placesRouter);
router.use("/teams", teamsRouter);
// router.use('/mypages', mypagesRouter);
router.use("/reservations", reservationsRouter);

module.exports = router;

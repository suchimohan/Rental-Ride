const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const carRouter = require('./cars.js');
const reviewRouter = require('./reviews.js')
const mapsRouter = require('./maps');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/cars', carRouter)

router.use('/reviews', reviewRouter)

router.use('/maps', mapsRouter);

module.exports = router;

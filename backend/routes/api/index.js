const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const carRouter = require('./cars.js');
const reviewRouter = require('./reviews.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/cars', carRouter)

router.use('/reviews', reviewRouter)


module.exports = router;

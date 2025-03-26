const signin = require('../controllers/signin');

const router = require('express').Router();

router.route('/signin').post(signin);

module.exports = router;
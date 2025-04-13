const { newpost } = require('../controllers/newpost');

const router = require('express').Router();

router.route('/newpost/:id').post(newpost);

module.exports  = router
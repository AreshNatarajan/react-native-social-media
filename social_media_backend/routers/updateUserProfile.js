const  updateUserProfile  = require('../controllers/updateUserProfile');

const router = require('express').Router();

router.route('/updateprofile/:id').post(updateUserProfile);

module.exports  = router;


const { follow_unFollow } = require('../controllers/follow_unFollow');

const router  = require('express').Router();

router.route('/follow-unfollow/:followerId/:personId').put(follow_unFollow);

module.exports  = router;

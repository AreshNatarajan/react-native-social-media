const { like_dislike } = require('../controllers/like_dislike');

const router = require('express').Router();
router.route('/like-dislike/:postId/:userId').put(like_dislike);

module.exports  = router
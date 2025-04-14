const { addComment } = require('../controllers/addComment');

const router = require('express').Router();
router.route('/add-comment/:postId').post(addComment);

module.exports  = router

const { getAllComments } = require('../controllers/getAllComments');

const router = require('express').Router();
router.route('/get-all-post/:postId').get(getAllComments)

module.exports = router

const { getAllPost } = require('../controllers/getAllPost');

const router = require('express').Router();
router.route('/getallpost').get(getAllPost);

module.exports = router
const { getUser } = require("../controllers/getUser");

const router = require("express").Router();

router.route('/getuser/:id').get(getUser);

module.exports  =  router 

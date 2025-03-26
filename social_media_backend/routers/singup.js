// const express = require('express');
const router =  require('express').Router();
const { signup} = require('../controllers/singup')
router.route('/signup').post(signup)
module.exports = router;
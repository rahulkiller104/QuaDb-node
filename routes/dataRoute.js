const express = require('express');
const router = express.Router();
const dataControllers=require('../controllers/data-controller');

router.get('/',dataControllers.getData)


module.exports = router;
var express = require('express');
var router = express.Router();

const models = require('../models');
/* GET home page. */
router.get('/', function(req, res, next) {
      models.Groups.findAll().then((data)=>{
            res.json(data);
      });    
  
});

module.exports = router;

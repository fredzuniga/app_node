var express = require('express');
var router = express.Router();

//const models = require('../models');
const Groups = require('../models').Groups;
/* GET home page. */
router.get('/', function(req, res, next) {
      Groups.findAll().then((data)=>{
            res.json(data);
      });
});

module.exports = router;

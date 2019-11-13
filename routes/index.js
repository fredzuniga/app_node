var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/post_test',function(req,res,next){
	var data = {
		dato : req.body.id
	}
	res.json(data);
});

module.exports = router;

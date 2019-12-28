var express = require('express');
var router = express.Router();
var multer = require('multer');

/*var multer = require('multer')({
	dest: 'public/uploads'
}); */
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
	  cb(null, 'public/uploads')
	},
	filename: function (req, file, cb) {
	  console.log(file);
	  var fileObj = {
	    "image/png": ".png",
	    "image/jpeg": ".jpeg",
	    "image/jpg": ".jpg"
	  };
	  if (fileObj[file.mimetype] == undefined) {
	    cb(new Error("file format not valid"));
	  } else {
	    cb(null, file.fieldname + '-' + Date.now() + fileObj[file.mimetype])
	    //file.originalname
	  }
	}
    })
    
var uploadFile = multer({ storage: storage })


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index.html', {title: 'Main page DEFAULT'});    
});

router.post('/post_test',function(req,res,next){
	var data = {
		dato : req.body.id
	}
	res.json(data);
});

router.get('/nunjucks', function(req, res){
    res.render('index.html', {title: 'Main page DEFAULT'});    
});

router.get('/uploadfile', function(req, res){
	res.render('upload.html');    
  });

router.post('/upload', [uploadFile.single('attachment')], function (req, res, next) {
	var file_name = req.file;
	var fileName = file_name.originalname;
	res.render('uploadok.html',{ nameFile: fileName });
});

router.post('/api/file',function(req,res){
	var id = Math.round(Math.random()*10);
	var storage = multer.diskStorage({
		destination: function (req, file, cb) {
		  cb(null, 'public/uploads')
		},
		filename: function (req, file, cb) {
		  console.log(file);
		  var fileObj = {
		    "image/png": ".png",
		    "image/jpeg": ".jpeg",
		    "image/jpg": ".jpg"
		  };
		  if (fileObj[file.mimetype] == undefined) {
		    cb(new Error("file format not valid"));
		  } else {
		    cb(null, id +'_'+Date.now() + fileObj[file.mimetype])
		  }
		}
	    })

	var upload = multer({ storage : storage}).single('attachment');
	upload(req,res,function(err) {
	    if(err) {
		  return res.end("Error uploading file.");
	    }
	    res.end("File is uploaded");
	});
});

module.exports = router;

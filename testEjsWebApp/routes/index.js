var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	console.log('test')
  res.render('index', { title: 'Express',
});
});

router.get('/page2',function(req, res,next){
  res.render('page2',{});
});


router.get('/page3',function(req, res,next){
  res.render('page3',{});
});



module.exports = router;

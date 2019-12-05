  var express = require('express');
var router = express.Router();
var loggedin=function(req,res,next){
	if(req.isAuthenticated()){
		next()
	}
	else{
		res.redirect('/login');
	}
}

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/profile',loggedin,function(req,res,next){
	res.send(req.session);
})
router.get('/logout',function(req,res){
	req.logout()
	res.render('login')
})

module.exports = router;
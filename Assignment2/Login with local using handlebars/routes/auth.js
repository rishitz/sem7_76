 var express = require('express');
var router = express.Router();
var User=require('../db/User');

module.exports=function(passport){
	router.post('/signup', function(req, res) {
		var username=req.body.username,
		password=req.body.password;

    User.findOne({username:username},function(err,docs){
    	if(err)
    	{
    		res.status(500).send('error');
    	}else{
    	if(docs){
			res.status(500).send('username already exist');
    	}
    	else{
    		var record=new User()
    			record.username=username;
    			record.password=record.hashPassword(password)
    			record.save(function(err,user){
    					if(err)
    					{
    						res.status(500).send('db error');
    					}else{
    						res.send(user);
    					}
    			})
    		
    	}
    }
    })
});
	router.post('/login',passport.authenticate('local',{
		failureRedirect:'/login',
		successRedirect:'/profile'
		
	}),function(req,res){
		res.send('hey');
	})
	return router;
}


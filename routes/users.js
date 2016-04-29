var express = require('express');
var router = express.Router();
var User=require('../models/user').User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  //console.log(req.param('err'));

  if(req.param)
  if(req.param('err')){
	  var err='Ошибка';
	  
  }
  else {
		var err='';
		
	  }
	  res.render('user', { err: err});
 
  
  
});
router.post('/',function(req, res, next){
//console.log(req.body);
	var email=req.body.email;
	var password=req.body.password;
	var users=new User({
	email:email,
	password:password,
	status:'new'
});
users.save(function(err,user){
	console.log('Ok');
	if(user){
		res.redirect('/');
	}
    else {
		
		//console.log(err);
		res.redirect('/users?err=true');
	}


});

});
module.exports = router;

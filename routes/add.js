
var express = require('express');
var router = express.Router();
var Maintext=require('../models/maintext').Maintext;
/* GET home page. */
router.get('/:id?', function(req, res, next) {
  //res.render('video');
  var maintext=new Maintext({
  name:'пожаловать на сайт',
  body:'главной',
  url:'lena',
  picture:'media/img/chef.jpg'
});
maintext.save(function(err,main){
console.log('Ok');

});
})

module.exports = router;
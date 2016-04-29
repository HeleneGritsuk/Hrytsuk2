var express = require('express');
var router = express.Router();
var Maintext=require('../models/maintext').Maintext;
/* GET home page. */
router.get('/:id?', function(req, res, next) {
    if(req.params.id){
    var index=req.params.id;
    }
    else {
    var index='index';    
    }
    
 Maintext.findOne({url:index},function(err,text){
 if(!text){
 text={
 name:"Добро пожаловать на сайт",
 body:"Текст"
 }}
   res.render('index', { text: text});
   
 })
 

});

module.exports = router;

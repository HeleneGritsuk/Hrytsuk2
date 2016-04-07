var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id?', function(req, res, next) {
    if(req.params.id){
    var index=req.params.id;
    }
    else {
    var index='Hello';    
    }
    
  res.render('index', { title: index});
});

module.exports = router;

var express = require('express');
var router = express.Router();
var mg = require('./mg');

/* GET home page. */

// localjhost:3000/news?start=1&count=2

router.get('/', function(req, res, next) {
  
  

  //读库
  //读库
  mg({
    dbName:'1810',
    collectionName:'index'
  },(collection,client)=>{
    collection.find().toArray((err,data)=>{
      if(data.length>0){
        res.send(data)
        // res.send(show(data))
      }else{
        res.send({error:1,msg:'数据为空'})
      }
    })
  })
});
module.exports = router;

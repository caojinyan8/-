var express = require('express');
var router = express.Router();
var mg = require('./mg');

router.get('/',(req,res)=>{
  console.log("dd",req.query)
  mg({
    dbName:'1809',
    collectionName:'users'
  },(collection,client)=>{
    collection.find({
      user:req.query.username,
      pass:req.query.passname
    }).toArray((err,data)=>{
      console.log("cjy",data)
    // for(var i=0;i<data.length;i++){
    //    if(data[i].user==req.query.user && data[i].pass==req.query.pass){
    //      return res.send("1")
    //     }else{
    //      return res.send("0")
    //     }
    // }
    if(data.length>0){
      if(req.query.username==data[0].user&&req.query.passname==data[0].pass){
        res.send("0") //登陆成功
      // res.send({data:data})
      }
      // else if(req.query.username!=data[0].user || req.query.passname!=data[0].pass){
      //   res.send("2") //用户名或者密码有误
      // }
    }
    else{ 
      res.send("1") //用户名或者密码位空
     } 
    client.close()
    })
  })
});
module.exports = router;

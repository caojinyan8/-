var express = require('express');
var router = express.Router();
var mg = require('./mg');

router.get('/', (req,res,next)=>{
  console.log("dddd",req.query)
  mg({
    dbName:'1809',
    collectionName:'users'
  },(collection,client)=>{
    collection.find({
      user:req.query.username
    }).toArray((err,data)=>{
      console.log("cjy",data)
      if(data.length>0){
        res.send("0") //响应出去状态 该用户名已存在
      }else{
        mg({
          dbName:'1809',
          collectionName:'users'
        },(collection,client)=>{
          collection.insertOne({user:req.query.username,pass:req.query.passname},()=>{
            res.send("1")   //注册成功 
          })

        })
          
      }
      client.close()

      // for(var i=0;i<data.length;i++){
      //   if(data[i].user==req.query.user){
      //    return res.send("1")
      //   }else{
      //     collection.save({user:req.query.user,pass:req.query.pass})
      //     console.log(pass)
      //    return res.send("0")
      //   }}
    })
  })
});
module.exports = router;


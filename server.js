// var express = require("express");
// var request = require("request");

// // 代理

// var app = express();
// app.get("/",(req,res)=>{
//   	let data=req.query.rq;
//   	// let fenlei=req.query.fenlei

//     res.append("Access-Control-Allow-Origin","*")
//     if(data=="https://mobile.bao.cn/mobile_api/common/banner?cateId=1"){
//     	request.get("https://mobile.bao.cn/mobile_api/common/banner?cateId=1",(err,res,body)=>{
// 			res.send(body)
// 		})
//     }
//   	// if(fenlei=="http://www.kuailvzaixian.com/wxmall/api/category/home/list?cityId=440600&_=1549129526460"){
//     // 	request.get("http://www.kuailvzaixian.com/wxmall/api/category/home/list?cityId=440600&_=1549129526460",(err,response,body)=>{
// 	// 		res.send(body)
// 	// 	})
//     // }
 
// })
// app.listen(3170)
'use strict';
const Question =  require('../models/question');

       // save function---
  exports.saveQuestion = function(req, res) {
	 
       let data_to_save = {
		   
		   'question':req.body.question
	   }	 
	        let question = new Question(data_to_save)
	  
	         question.save(function (err, result){
				 
				 if (err) throw err;
				 
				 return res.status(200).send({
					 status: true,
					 message: "select question",
					 statusCode: 200,
					 data: result
				 });
			 });
  };
    // update function --
  exports.updateQuestion = function(req, res) {
	  
	   Question.update({'_id':req.body.question_id},function (err,result){
		   
		   if (err) throw err;
		   
		   return res.status(200).send({
			   status: true,
			   message: "question update successfull",
			   statusCode: 200,
			   data: result
		   });
		   
	   });
   };
   
   //  remove function---
   exports.remove = function(req, res){
		   
	   Question.deleteMany({'_id':req.body.question_id}, function(err, result ){ 
	               
				   if(err) throw err;
				   
				         return res.status(200).send({
			                  status: true,
			                  message: "remove question.",
			                 statusCode: 200,
			                 data: result
			});
		  });
	   };
   
  // list all ---
  
  exports.listAll = function(req, res){
	  Question.find({status:'active'}, function(err, results){
		   
		   if(err) throw err;
		   
		   return res.status(200).send({
			                  status: true,
			                  message: "show all question list",
			                 statusCode: 200,
			                 data: results
	  });
	  
	  
  });
  };
  
  
  
  
'use strict';
//var DB = require('/');

const Seller =  require('../models/seller');

  // save function ---
exports.save = function(req, res){
	
	let data_to_save = {
                'user_id':req.body.user_id,
		        'cat_id' :req.body.cat_id
		       
		        
		}
		Seller.find({'_id':req.body.user_id},function (err,result){
			
			 if(result[0]){
                      return res.status(422).send({
                                status: false,
                                message: "seller already registered.",
                                statusCode: 422,
                                data: {}
			             });
			} else {
		             let seller = new Seller(data_to_save)
			
			                seller.save(function (err,result){

                      if (err) throw err;
    
		                      return res.status(200).send({
			                  status: true,
			                  message: "Seller save successfull",
			                  statusCode: 200,
			                  data: result
			               });
                        });
			}
		         
		        
		}
			 )};
			 
			 
// update function ----
	
	exports.update = function(req, res) {
		
		let data_to_update = {
		       // 'user_id':req.body.user_id,
		        'cat_id' :req.body.cat_id
		
		}
		
		
		Seller.find({'_id':req.params.id}, function(err, result){
		
		Seller.update({'_id':req.params.id},data_to_update,function (err,result){
		   
		   if (err) throw err;
		   
		   return res.status(200).send({
			   status: true,
			   message: "Seller update successfull",
			   statusCode: 200,
			   data: result
		   });
		   
	   });	
	   });
	}			


// get all by Seller function ----
  
  exports.listAll = function(req, res){
	  Seller.find({'user_id':req.params.user_id}, function(err, results){
		  
		   
		   if(err) throw err;
		   
		   return res.status(200).send({
			                  status: true,
			                  message: "show all  list by Seller",
			                 statusCode: 200,
			                 data: results
	  });
	  
	  
  });
  };	
		  
		  
		  
		  
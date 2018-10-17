'use strict';
//var DB = require('/');
let jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Profile =  require('../models/profile');

  // updateProfile ----
 exports.updateProfile = function(req, res) {
	  let password = generatePassword(req.body.password);
	  let data_to_save={  
		  'name'            : req.body.name,
          'mobile_no'       : req.body.mobile_no,
          'password'        :   password,
          'confirm_possword': req.body.confirm_possword
		
	     }
			
			
			Profile.find({'_id':req.body.user_id},function (err,result){
		     
			  if(!result[0]){
                      return res.status(422).send({
                                status: false,
                                message: "account not found.", 
                                statusCode: 422,
                                data: {}
			             });
			  } 
			  else {
     		       Profile.update({'_id':result[0]._id},data_to_save, function (err,result){

                      if (err) throw err;
    
		              return res.status(200).send({
			                  status: true,
			                  message: "account update successfull",
			                 statusCode: 200,
			                 data: result
			            });
                    })
			}
			});		
  
};

 //  generatePassword ---- 
 
  function generatePassword(pwd) {

    let hash = bcrypt.hashSync(pwd, 10);
    return hash;
};


//  remove function---
   exports.remove = function(req, res){
		   
	   Profile.deleteMany({'_id':req.body.user_id}, function(err, result ){ 
	               
				   if(err) throw err;
				   
				         return res.status(200).send({
			                  status: true,
			                  message: "remove all....",
			                 statusCode: 200,
			                 data: result
			});
		  });
	   };
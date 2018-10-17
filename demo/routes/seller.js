'use strict';
module.exports = function(app,connection) {

var Seller = require('../controller/SellerController');
 const validate = require('express-validation')
 const sellerValidations  = require('../validations/seller');
 
 
       app.route('/seller')
	      .post(sellerValidations.seller, Seller.save);
		  
	   app.route('/seller/:id')
	      .put(sellerValidations.seller, Seller.update);

       app.route('/seller/:user_id')
	      .get( Seller.listAll);		  
		  
		  
		  
}
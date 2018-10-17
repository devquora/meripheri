'use strict';
var mongoose =  require('mongoose');
var SellerSchema = new mongoose.Schema({
	
	
	  user_id: {
		type : String,
		trim : true,
		default: ""
	  },
	   cat_id: {
		type : String,
		trim : true,
		default: ""
	  },
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	}

	
});
var Seller = mongoose.model('Seller',SellerSchema);
module.exports =Seller;
'use strict';
var mongoose =  require('mongoose');
var ProfileSchema = new mongoose.Schema({
	 
	 name: {
		type : String,
		trim : true,
		default: ""
	
	},
	mobile_no: {
		type : Number,
		trim : true,
		default: ""
	
	},
	security_question: {
		type : String,
		trim : true,
		default: ""
	
	},
	answer :{
		type : String,
		trim : true,
		default: ""
		
		},
	password: {
		type : String,
		trim : true,
		default: ""
	},
    confirm_possword: {
		type : String,
		trim : true,
		default: ""
	
	}
});

var Profile = mongoose.model('Profile',ProfileSchema);
module.exports = Profile;
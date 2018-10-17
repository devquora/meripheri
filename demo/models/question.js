'use strict';
var mongoose =  require('mongoose');
var QuestionSchema = new mongoose.Schema({
	question : {
		type : String,
		trim : true,
		default: ""
	},
	
	status : {
		type : String,
		trim : true,
		default: "active"
	}
	
});

var Question = mongoose.model('Question',QuestionSchema);
module.exports = Question;
	
	
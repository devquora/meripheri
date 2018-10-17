'use strict';
var mongoose =  require('mongoose');
var HeroSchema = new mongoose.Schema({
	name :{
		type : String,
		trim : true,
		default: "",
	//	required : true
		},	
	alterEgo: {
		type : String,
		trim : true,
		default: "",
	//	required : true
	},
	power: {
		type : String,
		trim : true,
		default: ""
	}	
});

var Hero = mongoose.model('Hero',HeroSchema);
module.exports = Hero;
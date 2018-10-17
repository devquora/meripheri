'use strict';
module.exports = function(app,connection) {
	
var Question = require('../controller/QuestionController');
 const validate = require('express-validation')
 const questionValidations  = require('../validations/question');	
	
	
	    app.route('/question')
	      .post(questionValidations.question, Question.saveQuestion);
		  
		  
		app.route('/question')
	      .put(Question.updateQuestion);


		app.route('/question/:id')
	      .get(Question.remove);

		app.route('/question')
	      .get(Question.listAll);  
		  
	     
	
}
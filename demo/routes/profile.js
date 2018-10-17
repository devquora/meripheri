'use strict';
module.exports = function(app,connection){
	
	var Profile = require('../controller/ProfileController');
 const validate = require('express-validation')
 const profileValidations  = require('../validations/profile');
	
	   
	    app.route('/profile/:id')
	      .put(profileValidations.update, Profile.updateProfile);
	
	    app.route('/profile/:id')
	      .get(Profile.remove);
	
	
	
	
	
	
	
	
	
}
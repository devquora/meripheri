'use strict';
module.exports = function(app,connection) {

var Home = require('../controller/HomeController');

	app.route('/')
	 .get(Home.index);
	 
	// app.route('/save-hero')
	//.post(Home.saveHero);
	
	// app.route('/delete-hero')
	//.delete(Home.deleteHero);
	
	//app.route('/put-hero')
	//.put(Home.putHero)
	
	//app.route('/find-hero')
	// .patch(Home.findHero);
    

     
	 
}

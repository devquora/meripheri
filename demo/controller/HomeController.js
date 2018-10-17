'use strict';
//var DB = require('/');
const Hero =  require('../models/Hero');
exports.index = function(req, res) {

    return res.status(200).send({
      status: true,
      message: "Welcome to Node Express .........",
      statusCode: 200,
      data: null
    });
};

exports.saveHero = function(req, res) {
	
let data_to_save={
		'name'    :req.name,
		'alterEgo':req.age,
		'power '  :req.power 
	
	}
	
	/*exports.deleteHero = function (req, res) {
		 let data_to_delete={
			 'name'    :req.name,
		     'alterEgo':req.age,
		     'power '  :req.power 
			 
		 }
		*/  
		
	/*exports.putHero = function (req, res){
		let data_to_put={
			'name'     : 'durgesh',
			'alterEgo' : 'sstri',
			'power'    : 'self-power'
	}	 
	*/	    	
  //  exports.findHero = function(req, res){
		
		//let data_to_find = { }
		
		
		
	      //    let hero= new Hero(data_to_save);
		 //     let hero= new Hero(data_to_delete);
	    //      let hero= new Hero(data_to_put);
	   //       let hero = new hero(data_to_find) 
	   
	   
	   
       
	 /*  if (hero.name == null || hero.name== ""){  
        alert("Name can't be blank");
		console.log("error");
       return false; }
	  */ 
	   
	  /*  if (hero.alterEgo == null || hero.alterEgo == ""){  
        alert("Name can't be blank");
		console.log("error");
       return false; }
	  */
	      hero.save(data_to_save,function (err,result){

          if (err) throw err;
    
		   return res.status(200).send({
			  status: true,
			  message: "User List",
			  statusCode: 200,
			  data: result
			});
  });
  
};

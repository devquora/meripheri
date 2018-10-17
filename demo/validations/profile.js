'use strict';
const validate = require('express-validation');
let Joi = require('joi');


let ProfileSchema = Joi.object().keys({
        name: Joi.string().min(4).required().error(
            new Error('Please enter valid name.')
        ),
       mobile_no: Joi.string()
        .regex(/^(\+\d{1,3}[- ]?)?\d{10}$/)
        .required().error(
            new Error('Please enter valid mobile no.')
        ),
	
	   password :Joi.string().min(6).alphanum().required().error(
	            new Error('Please enter minimun 6 digit password.')
              ),
	
	  confirm_possword :Joi.string().valid(Joi.ref('password')).required().strict(),
       
	  
});


exports.update = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, ProfileSchema);
    if (err) {

        if (err.error) {
            let error_message = "";
            if (err.error.details) {
                error_message = err.error.details[0].message;
            } else {
                error_message = err.error.message;
            }
            return res.status(422).send({
                status: false,
                message: error_message,
                statusCode: 422,
                data: {}
            });

            return false;
        }
    }
    next();
}
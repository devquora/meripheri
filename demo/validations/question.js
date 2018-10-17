'use strict';
const validate = require('express-validation');
let Joi = require('joi');

    let QuestionSchema = Joi.object().keys({
         
		 question: Joi.string().required()
     });
    
	exports.question = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data,QuestionSchema );
    if (err) {
        if (err.error) {
            return res.status(422).send({
                status: false,
                message: err.error.details[0].message,
                statusCode: 422,
                data: {}
            });


            return false;
        }
    }

    next();
}


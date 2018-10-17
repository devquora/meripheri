'use strict';
const validate = require('express-validation');
let Joi = require('joi');

let SellerSchema = Joi.object().keys({
    user_id: Joi.string().required().error(
            new Error('Please enter valid user ID.')
			),
    cat_id: Joi.string().required().error(
            new Error('Please enter valid Category ID.')
	     )
	

});

exports.seller = function(req, res, next) {
    let data = req.body;
    let err = Joi.validate(data, SellerSchema );
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
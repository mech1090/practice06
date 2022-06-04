const Joi = require('joi')

const validateSchema = (fields)=>{
    const userValidateSchema = Joi.object({
        email:Joi.string().min(8).max(24).required(),
        password:Joi.string().min(6).max(24).required()
    })
    const {error,value} = userValidateSchema.validate(fields)
    return {error,value}
}

module.exports = {validateSchema}
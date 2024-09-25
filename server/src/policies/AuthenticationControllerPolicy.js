const Joi = require('joi')

module.exports = {
    register (req,res,next){
        const schema = Joi.object ({
            email: Joi.string().email().required().messages({
                'string.email': 'You must provide a valid email address',
                'any.required': 'Email is required'
            }),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,32}$')).required().messages({
                'string.pattern.base': 'Password must be between 8 and 32 characters long and contain only alphanumeric characters',
                'any.required': 'Password is required'
            })
        })

        const validation = schema.validate(req.body)

        if(validation.error){
            switch (validation.error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'You must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: 'You must provide a valid password'
                    })
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
                    break
            }
        } else {
            next()
        }
    }
}
import Joi from 'joi';

const productFormat = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    price: Joi.number().required(),
    image: Joi.any()
});

export default productFormat;

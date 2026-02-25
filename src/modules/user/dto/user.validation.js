import Joi from 'joi';

const createUser = {
    body: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(8).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
        role: Joi.string(), // Role ID
    }),
};

const updateUser = {
    params: Joi.object().keys({
        id: Joi.string().required()
    }),
    body: Joi.object().keys({
        firstName: Joi.string(),
        lastName: Joi.string(),
        email: Joi.string().email(),
        password: Joi.string().min(8).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
        isActive: Joi.boolean(),
    }),
};

export default {
    createUser,
    updateUser,
};

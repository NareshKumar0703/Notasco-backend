import Joi from 'joi';
import { ROLES } from '../../../utils/constants.js';

const createRole = {
    body: Joi.object().keys({
        name: Joi.string().required().valid(...Object.values(ROLES)),
        permissions: Joi.object().keys({
            user: Joi.object().keys({
                view: Joi.boolean(),
                add: Joi.boolean(),
                edit: Joi.boolean(),
                delete: Joi.boolean(),
            }),
        }),
        description: Joi.string(),
    }),
};

const updateRole = {
    params: Joi.object().keys({
        id: Joi.string().required()
    }),
    body: Joi.object().keys({
        name: Joi.string().valid(...Object.values(ROLES)),
        permissions: Joi.object().keys({
            user: Joi.object().keys({
                view: Joi.boolean(),
                add: Joi.boolean(),
                edit: Joi.boolean(),
                delete: Joi.boolean(),
            }),
        }),
        description: Joi.string(),
    }),
};

export default {
    createRole,
    updateRole,
};

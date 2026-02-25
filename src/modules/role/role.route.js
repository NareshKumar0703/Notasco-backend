import express from 'express';
import validate from '../../middleware/validate.middleware.js';
import roleValidation from './dto/role.validation.js';
import * as roleController from './role.controller.js';

const router = express.Router();

router
    .route('/')
    .post(validate(roleValidation.createRole), roleController.createRole)
    .get(roleController.getRoles);

router
    .route('/:id')
    .get(roleController.getRole)
    .patch(validate(roleValidation.updateRole), roleController.updateRole)
    .delete(roleController.deleteRole);

export default router;

import express from 'express';
import validate from '../../middleware/validate.middleware.js';
import { hasPermission } from '../../middleware/role.middleware.js';
import { PERMISSIONS } from '../../utils/constants.js';
import userValidation from './dto/user.validation.js';
import * as userController from './user.controller.js';

const router = express.Router();

router
    .route('/')
    .post(hasPermission(PERMISSIONS.USER.ADD), validate(userValidation.createUser), userController.createUser)
    .get(hasPermission(PERMISSIONS.USER.VIEW), userController.getUsers);

router
    .route('/:id')
    .get(hasPermission(PERMISSIONS.USER.VIEW), userController.getUser)
    .patch(hasPermission(PERMISSIONS.USER.EDIT), validate(userValidation.updateUser), userController.updateUser)
    .delete(hasPermission(PERMISSIONS.USER.DELETE), userController.deleteUser);

export default router;

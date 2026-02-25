import express from 'express';
import validate from '../../middleware/validate.middleware.js';
import authValidation from './auth.validation.js';
import * as authController from './auth.controller.js';

const router = express.Router();

router
    .post('/register', validate(authValidation.register), authController.register);

router
    .post('/login', validate(authValidation.login), authController.login);

router
    .get('/profile', authController.getMe);

export default router;

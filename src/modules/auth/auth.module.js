import router from './auth.route.js';
import * as authService from './auth.service.js';
import * as authController from './auth.controller.js';

export const AuthModule = {
    router,
    service: authService,
    controller: authController
};

export default AuthModule;

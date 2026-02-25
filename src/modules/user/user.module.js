import router from './user.route.js';
import * as userService from './user.service.js';
import * as userController from './user.controller.js';

export const UserModule = {
    router,
    service: userService,
    controller: userController
};

export default UserModule;

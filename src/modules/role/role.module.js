import router from './role.route.js';
import * as roleService from './role.service.js';
import * as roleController from './role.controller.js';

export const RoleModule = {
    router,
    service: roleService,
    controller: roleController
};

export default RoleModule;

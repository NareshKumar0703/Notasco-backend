import { errorResponse } from '../utils/apiResponse.js';

/**
 * @desc    Check if user has required role
 * @param   {...String} roles
 */
export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !req.user.role) {
            return errorResponse(res, 'User role not found', 403);
        }

        const userRoleName = req.user.role.name || req.user.role;

        if (!roles.includes(userRoleName)) {
            return errorResponse(
                res,
                `User role ${userRoleName} is not authorized to access this route`,
                403
            );
        }
        next();
    };
};

/**
 * @desc    Check if user has required permission
 * @param   {String} permission
 */
export const hasPermission = (permission) => {
    return (req, res, next) => {
        if (!req.user || !req.user.role || !req.user.role.permissions) {
            return errorResponse(res, 'Permissions not found', 403);
        }

        const [resource, action] = permission.split('.');

        if (req.user.role.permissions[resource] && req.user.role.permissions[resource][action]) {
            next();
        } else {
            return errorResponse(res, 'Not authorized for this action', 403);
        }
    }
}

import * as roleService from './role.service.js';
import { successResponse, errorResponse } from '../../utils/apiResponse.js';

export const createRole = async (req, res) => {
    try {
        const role = await roleService.createRole(req.body);
        return successResponse(res, 'Role created successfully', role, 201);
    } catch (error) {
        return errorResponse(res, error.message, 500);
    }
};

export const getRoles = async (req, res) => {
    try {
        const roles = await roleService.getRoles();
        return successResponse(res, 'Roles retrieved successfully', roles);
    } catch (error) {
        return errorResponse(res, error.message, 500);
    }
};

export const getRole = async (req, res) => {
    try {
        const role = await roleService.getRoleById(req.params.id);
        if (!role) {
            return errorResponse(res, 'Role not found', 404);
        }
        return successResponse(res, 'Role retrieved successfully', role);
    } catch (error) {
        return errorResponse(res, error.message, 500);
    }
};

export const updateRole = async (req, res) => {
    try {
        const role = await roleService.updateRoleById(req.params.id, req.body);
        return successResponse(res, 'Role updated successfully', role);
    } catch (error) {
        return errorResponse(res, error.message, 500);
    }
};

export const deleteRole = async (req, res) => {
    try {
        await roleService.deleteRoleById(req.params.id);
        return successResponse(res, 'Role deleted successfully');
    } catch (error) {
        return errorResponse(res, error.message, 500);
    }
};

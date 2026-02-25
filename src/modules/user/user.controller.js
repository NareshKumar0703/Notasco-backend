import * as userService from './user.service.js';
import { successResponse, errorResponse, paginatedResponse } from '../../utils/apiResponse.js';
import { getMeta } from '../../utils/pagination.js';

export const createUser = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        return successResponse(res, 'User created successfully', user, 201);
    } catch (error) {
        return errorResponse(res, error.message, 400); // 400 for bad request (e.g. duplicate email)
    }
};

export const getUsers = async (req, res) => {
    const { page, limit } = req.query;
    try {
        const { users, total } = await userService.queryUsers(page, limit);
        const meta = getMeta(page, limit, total);
        return paginatedResponse(res, 'Users retrieved successfully', users, meta);
    } catch (error) {
        return errorResponse(res, error.message, 500);
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) {
            return errorResponse(res, 'User not found', 404);
        }
        return successResponse(res, 'User retrieved successfully', user);
    } catch (error) {
        return errorResponse(res, error.message, 500);
    }
};

export const updateUser = async (req, res) => {
    try {
        const user = await userService.updateUserById(req.params.id, req.body);
        return successResponse(res, 'User updated successfully', user);
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

export const deleteUser = async (req, res) => {
    try {
        await userService.deleteUserById(req.params.id);
        return successResponse(res, 'User deleted successfully');
    } catch (error) {
        return errorResponse(res, error.message, 500);
    }
};

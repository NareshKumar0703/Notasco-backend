import * as authService from './auth.service.js';
import { successResponse, errorResponse } from '../../utils/apiResponse.js';

export const register = async (req, res) => {
    try {
        const user = await authService.register(req.body);
        const token = authService.generateToken(user._id);
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            token,
            data: { user }
            
        });
    } catch (error) {
        return errorResponse(res, error.message, 400);
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authService.login(email, password);
        const token = authService.generateToken(user._id);

        user.password = undefined;

        res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            data: { user }
        });
    } catch (error) {
        return errorResponse(res, error.message, 401);
    }
};

export const getMe = async (req, res) => {
    try {
        return successResponse(res, 'Profile retrieved successfully', req.user);
    } catch (error) {
        return errorResponse(res, error.message, 500);
    }
};

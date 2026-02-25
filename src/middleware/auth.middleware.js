import jwt from 'jsonwebtoken';
import { errorResponse } from '../utils/apiResponse.js';
import User from '../modules/user/schema/schema.js';

export const protect = async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id).select('-password').populate('role');

            if (!user) {
                return errorResponse(res, 'Not authorized, user not found', 401);
            }
            req.user = user;
            next();
        } catch (error) {
            console.error(error);
            return errorResponse(res, 'Not authorized, token failed', 401);
        }
    }

    if (!token) {
        return errorResponse(res, 'Not authorized, no token', 401);
    }
    next();
};

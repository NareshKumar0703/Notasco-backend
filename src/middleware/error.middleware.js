import { errorResponse } from '../utils/apiResponse.js';

export const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    console.error(err);

    if (err.name === 'CastError') {
        const message = `Resource not found`;
        return errorResponse(res, message, 404);
    }

    if (err.code === 11000) {
        const message = 'Duplicate field value entered';
        return errorResponse(res, message, 400);
    }

    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map((val) => val.message).join(', ');
        return errorResponse(res, message, 400);
    }

    errorResponse(res, error.message || 'Server Error', error.statusCode || 500);
};

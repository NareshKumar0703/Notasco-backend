import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import { errorHandler } from '../middleware/error.middleware.js';
import { errorResponse } from '../utils/apiResponse.js';
import apiRoutes from '../routes/v1/index.js';

import { protect } from '../middleware/auth.middleware.js';
import { PUBLIC_ROUTES } from '../utils/constants.js';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
    if (PUBLIC_ROUTES.includes(req.path) || req.path.startsWith('/api/docs')) {
        return next();
    }
    protect(req, res, next);
});

// Routes
app.use('/api', apiRoutes);

// 404 Handler
app.use((req, res, next) => {
    errorResponse(res, 'Not Found', 404);
});

// Error Handler
app.use(errorHandler);

export default app;

import express from 'express';
import authRoutes from '../../modules/auth/auth.route.js';
import userRoutes from '../../modules/user/user.route.js';
import roleRoutes from '../../modules/role/role.route.js';
import postRoutes from '../../modules/post/post.route.js';

import healthRoutes from '../health.route.js';
import docsRoutes from '../docs.route.js';
import friendRoutes from '../../modules/friend/friend.route.js';

const router = express.Router();

const COMPONENT_ROUTES = [
    {
        path: '/auth',
        route: authRoutes
    },
    {
        path: '/users',
        route: userRoutes
    },
    {
        path: '/roles',
        route: roleRoutes
    },
    {
        path: '/posts',
        route: postRoutes
    },
    {
        path: '/friends',
        route: friendRoutes
    },
    {
        path: '/health',
        route: healthRoutes
    },
    {
        path: '/docs',
        route: docsRoutes
    }
];

COMPONENT_ROUTES.forEach((component) => {
    router.use(component.path, component.route);
});

export default router;

export const ROLES = {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN',
  USER: 'USER',
};

export const PERMISSIONS = {
  USER: {
    VIEW: 'user.view',
    ADD: 'user.add',
    EDIT: 'user.edit',
    DELETE: 'user.delete',
  },
};

export const PUBLIC_ROUTES = [
  '/api/auth/login',
  '/api/auth/register',
  '/api/health',
  '/api/docs'
];

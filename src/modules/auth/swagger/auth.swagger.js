/**
 * @swagger
 * paths:
 *   /api/auth/register:
 *     post:
 *       tags:
 *         - Authentication
 *       summary: Register a new user
 *       requestBody:
 *         description: User registration details
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - firstName
 *                 - lastName
 *                 - email
 *                 - password
 *               properties:
 *                 firstName:
 *                   type: string
 *                   example: John
 *                 lastName:
 *                   type: string
 *                   example: Doe
 *                 email:
 *                   type: string
 *                   format: email
 *                   example: john@example.com
 *                 password:
 *                   type: string
 *                   format: password
 *                   example: Password123!
 *       responses:
 *         201:
 *           description: User registered successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: true
 *                   message:
 *                     type: string
 *                     example: User registered successfully
 *                   data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 65f123abc456def789000111
 *                       email:
 *                         type: string
 *                         example: john@example.com
 *         400:
 *           description: Bad Request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: false
 *                   message:
 *                     type: string
 *                     example: Email already exists
 */

/**
 * @swagger
 * paths:
 *   /api/auth/login:
 *     post:
 *       tags:
 *         - Authentication
 *       summary: Login user
 *       description: Create new Auth Token to access resources
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - email
 *                 - password
 *               properties:
 *                 email:
 *                   type: string
 *                   example: john@example.com
 *                 password:
 *                   type: string
 *                   example: Password123!
 *       responses:
 *         200:
 *           description: Login successful
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: true
 *                   message:
 *                     type: string
 *                     example: Login successful
 *                   data:
 *                     type: object
 *                     properties:
 *                       accessToken:
 *                         type: string
 *                         example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *         400:
 *           description: Invalid credentials
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: false
 *                   message:
 *                     type: string
 *                     example: Invalid email or password
 */

/**
 * @swagger
 * paths:
 *   /api/auth/profile:
 *     get:
 *       tags:
 *         - Authentication
 *       summary: Get current logged in user
 *       security:
 *         - bearerAuth: []
 *       responses:
 *         200:
 *           description: Profile retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: true
 *                   message:
 *                     type: string
 *                     example: Profile retrieved successfully
 *                   data:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: 65f123abc456def789000111
 *                       firstName:
 *                         type: string
 *                         example: John
 *                       lastName:
 *                         type: string
 *                         example: Doe
 *                       email:
 *                         type: string
 *                         example: john@example.com
 *                       role:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             example: 65f123abc456def789000222
 *                           name:
 *                             type: string
 *                             example: admin
 *                           permissions:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example:
 *                               - USER_ADD
 *                               - USER_VIEW
 *                               - USER_EDIT
 *                               - USER_DELETE
 *         401:
 *           description: Unauthorized
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   success:
 *                     type: boolean
 *                     example: false
 *                   message:
 *                     type: string
 *                     example: Unauthorized
 */

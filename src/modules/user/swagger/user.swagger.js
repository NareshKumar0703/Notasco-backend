/**
 * @swagger
 * paths:
 *   /users:
 *     post:
 *       tags:
 *         - Users
 *       summary: Create a new user
 *       requestBody:
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
 *                 lastName:
 *                   type: string
 *                 email:
 *                   type: string
 *                   format: email
 *                 password:
 *                   type: string
 *                   format: password
 *                 role:
 *                   type: string
 *                   description: Role ID
 *       responses:
 *         201:
 *           description: User created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/modules/schemas/User'
 *         400:
 *           description: Bad Request
 *     get:
 *       tags:
 *         - Users
 *       summary: Get all users
 *       parameters:
 *         - in: query
 *           name: page
 *           schema:
 *             type: integer
 *         - in: query
 *           name: limit
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: Users retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/modules/schemas/User'
 */

/**
 * @swagger
 * paths:
 *   /users/{id}:
 *     get:
 *       tags:
 *         - Users
 *       summary: Get user by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *       responses:
 *         200:
 *           description: User retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/modules/schemas/User'
 *         404:
 *           description: User not found
 *     patch:
 *       tags:
 *         - Users
 *       summary: Update user
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *       requestBody:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 email:
 *                   type: string
 *       responses:
 *         200:
 *           description: User updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/modules/schemas/User'
 *     delete:
 *       tags:
 *         - Users
 *       summary: Delete user
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *       responses:
 *         200:
 *           description: User deleted successfully
 */

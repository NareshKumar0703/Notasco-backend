/**
 * @swagger
 * paths:
 *   /roles:
 *     post:
 *       tags:
 *         - Roles
 *       summary: Create a newly role
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - name
 *               properties:
 *                 name:
 *                   type: string
 *                   enum: [SUPERADMIN, ADMIN, USER]
 *                 permissions:
 *                   type: object
 *                 description:
 *                   type: string
 *       responses:
 *         201:
 *           description: Role created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/modules/schemas/Role'
 *         400:
 *           description: Bad request
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/modules/schemas/Response/badRequest/schema'
 *     get:
 *       tags:
 *         - Roles
 *       summary: Get all roles
 *       responses:
 *         200:
 *           description: Roles retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/modules/schemas/Role'
 */

/**
 * @swagger
 * paths:
 *   /roles/{id}:
 *     get:
 *       tags:
 *         - Roles
 *       summary: Get role by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *       responses:
 *         200:
 *           description: Role retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/modules/schemas/Role'
 *         404:
 *           description: Role not found
 *     patch:
 *       tags:
 *         - Roles
 *       summary: Update role
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
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *       responses:
 *         200:
 *           description: Role updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/modules/schemas/Role'
 *     delete:
 *       tags:
 *         - Roles
 *       summary: Delete role
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *       responses:
 *         200:
 *           description: Role deleted successfully
 */

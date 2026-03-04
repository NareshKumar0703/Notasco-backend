/**
 * @swagger
 * paths:
 *   /api/posts:
 *     post:
 *       tags:
 *         - Posts
 *       summary: Create a new post
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - author
 *                 - content
 *               properties:
 *                 author:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                 content:
 *                   type: string
 *                 visibility:
 *                   type: string
 *                   enum: [PUBLIC, PRIVATE, FOLLOWERS]
 *       responses:
 *         201:
 *           description: Post created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/modules/schemas/Post'
 *         400:
 *           description: Bad Request
 *
 *     get:
 *       tags:
 *         - Posts
 *       summary: Get all posts
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
 *           description: Posts retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/modules/schemas/Post'
 */


/**
 * @swagger
 * paths:
 *   /posts/{id}:
 *     get:
 *       tags:
 *         - Posts
 *       summary: Get post by ID
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *       responses:
 *         200:
 *           description: Post retrieved successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/modules/schemas/Post'
 *         404:
 *           description: Post not found
 *
 *     put:
 *       tags:
 *         - Posts
 *       summary: Update post
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
 *                 author:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                 content:
 *                   type: string
 *                 visibility:
 *                   type: string
 *                   enum: [PUBLIC, PRIVATE, FOLLOWERS]
 *                 isDeleted:
 *                   type: boolean
 *       responses:
 *         200:
 *           description: Post updated successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/modules/schemas/Post'
 *
 *     delete:
 *       tags:
 *         - Posts
 *       summary: Delete post (soft delete)
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *       responses:
 *         200:
 *           description: Post deleted successfully
 */

/**
 * @swagger
 * paths:
 *   /api/posts/{id}/like:
 *     patch:
 *       tags:
 *         - Posts
 *       summary: Toggle like on a post
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *       responses:
 *         200:
 *           description: Like toggled successfully
 *         404:
 *           description: Post not found
 */

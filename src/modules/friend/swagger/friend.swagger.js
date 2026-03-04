/**
 * @swagger
 * tags:
 *   name: Friends
 *   description: Friend management
 */

/**
 * @swagger
 * /friends/add:
 *   post:
 *     summary: Send a friend request
 *     tags: [Friends]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               whom:
 *                 type: string
 *                 description: User ID to send request to
 *     responses:
 *       200:
 *         description: Friend request sent
 *       400:
 *         description: Error
 */

/**
 * @swagger
 * /friends/remove:
 *   post:
 *     summary: Remove a friend
 *     tags: [Friends]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               whom:
 *                 type: string
 *                 description: User ID to remove
 *     responses:
 *       200:
 *         description: Friend removed
 *       400:
 *         description: Error
 */

/**
 * @swagger
 * /friends/accept:
 *   post:
 *     summary: Accept a friend request
 *     tags: [Friends]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               who:
 *                 type: string
 *                 description: User ID who sent the request
 *     responses:
 *       200:
 *         description: Friend request accepted
 *       400:
 *         description: Error
 */

/**
 * @swagger
 * /friends/reject:
 *   post:
 *     summary: Reject a friend request
 *     tags: [Friends]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               who:
 *                 type: string
 *                 description: User ID who sent the request
 *     responses:
 *       200:
 *         description: Friend request rejected
 *       400:
 *         description: Error
 */

/**
 * @swagger
 * /friends/my-friends:
 *   get:
 *     summary: List authenticated user's friends
 *     tags: [Friends]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of friends
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /friends/user/{userId}/friends:
 *   get:
 *     summary: List friends for a specific user
 *     tags: [Friends]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: List of friends
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: User not found
 */

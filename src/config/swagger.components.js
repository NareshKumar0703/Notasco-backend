
/**
 * @swagger
 * modules:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 60d0fe4f5311236168a109ca
 *         firstName:
 *           type: string
 *           example: John
 *         lastName:
 *           type: string
 *           example: Doe
 *         email:
 *           type: string
 *           format: email
 *           example: john@example.com
 *         role:
 *           type: string
 *           enum: [SUPERADMIN, ADMIN, USER]
 *           example: USER
 *         isActive:
 *           type: boolean
 *           example: true
 *     Role:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 60d0fe4f5311236168a109cb
 *         name:
 *           type: string
 *           enum: [SUPERADMIN, ADMIN, USER]
 *           example: USER
 *         permissions:
 *           type: object
 *           example: { "user": { "view": true } }
 *         description:
 *           type: string
 *           example: Standard User Role
 */

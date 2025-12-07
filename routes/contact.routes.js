const router = require("express").Router();
const { createContact, getContacts } = require("../controllers/contact.controller");

/**
 * @swagger
 * tags:
 *   name: Contact
 *   description: Contact Form API
 */

/**
 * @swagger
 * /contact:
 *   post:
 *     summary: Create a new contact entry
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               mobile:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Contact form created
 */

/**
 * @swagger
 * /contact:
 *   get:
 *     summary: Get all contact form entries
 *     tags: [Contact]
 *     responses:
 *       200:
 *         description: List of all contacts
 */

router.post("/contact", createContact);
router.get("/contact", getContacts);

module.exports = router;

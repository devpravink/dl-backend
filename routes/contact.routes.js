const router = require("express").Router();
const { createContact } = require("../controllers/contact.controller");

router.post("/contact", createContact);

module.exports = router;

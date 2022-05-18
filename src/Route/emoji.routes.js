const express = require("express");
const { addText, getText } = require("../controllers/emoji.controller");


const router = express.Router();


router.post("/addText", addText);
router.get("/getText", getText);

module.exports = router;

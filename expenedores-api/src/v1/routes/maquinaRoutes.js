const express = require("express");
const router = express.Router();
const maquinaController = require("../../controllers/maquinaController");

router
    .get("/", maquinaController.getAllMaquines)
    .get("/:maquinaID", maquinaController.getMaquina)

module.exports = router;
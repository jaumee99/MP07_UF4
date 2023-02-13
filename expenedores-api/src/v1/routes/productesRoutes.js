const express = require("express");
const router = express.Router();
const producteController = require("../../controllers/producteController");

router
    .get("/", producteController.getAllProductes)
    .get("/:producteID", producteController.getProducte)
    .post("/:producteID", producteController.createProducte)
    .patch("/:producteID", producteController.updateProducte)
    .delete("/:producteID", producteController.deleteProducte);

module.exports = router;
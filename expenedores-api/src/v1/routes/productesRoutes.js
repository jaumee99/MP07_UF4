const express = require("express");
const router = express.Router();
const producteController = require("../../controllers/producteController");

/**
 * @openapi
 * /api/v1/productes:
 *   get:
 *     tags:
 *       - Productes
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *         description: The mode of a producte
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Producte"
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string
 *                       example: "Some error message"
 */

router
    .get("/", producteController.getAllProductes)
    .get("/:producteID", producteController.getProducte)
    .post("/:producteID", producteController.createProducte)
    .patch("/:producteID", producteController.updateProducte)
    .delete("/:producteID", producteController.deleteProducte);

module.exports = router;
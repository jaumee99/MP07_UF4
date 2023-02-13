const producteService = require("../services/producteService");

const getAllProductes = (req, res) => {
    const allProductes = producteService.getAllProductes();
    res.send("GET all productes");
};

const getProducte = (req, res) => {
    const oneProducte = producteService.getProducte(req.params.producteID);
    res.send(`GET producte ${req.params.producteID}`);
};

const createProducte = (req, res) => {
    const createProducte = producteService.createProducte(req.params.producteID);
    res.send(`CREAR producte ${req.params.producteID}`);
};

const updateProducte = (req, res) => {
    const updateProducte = producteService.updateProducte(req.params.producteID);
    res.send(`UPDATE producte ${req.params.producteID}`);
};

const deleteProducte = (req, res) => {
    const deleteProducte = producteService.deleteProducte(req.params.producteID);
    res.send(`DELETE producte ${req.params.producteID}`);
};

module.exports = {
    getAllProductes,
    getProducte,
    createProducte,
    updateProducte,
    deleteProducte
};
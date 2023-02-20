const producteService = require("../services/producteService");

const getAllProductes = (req, res) => {
    const { mode } = req.query;
    try {
      const allProductes = producteService.getAllProductes({ mode });
      res.send({ status: "OK", data: allProductes });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getProducte = (req, res) => {
    const {
        params: { producteID },
      } = req;
    
      if (!producteID) {
        res.status(400).send({
          status: "FAILED",
          data: { error: "Parameter ':producteID' can not be empty" },
        });
        return;
      }
    
      try {
        const producte = producteService.getProducte(producteID);
        res.send({ status: "OK", data: producte });
      } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
};

const createProducte = (req, res) => {
    const createProducte = producteService.createProducte(req.params.producteID);
    res.send(`CREAR producte ${req.params.producteID}`);
};

const updateProducte = (req, res) => {
    const {
        body,
        params: { producteID },
      } = req;
    
      if (!producteID) {
        res.status(400).send({
          status: "FAILED",
          data: { error: "Parameter ':producteID' can not be empty" },
        });
      }
    
      try {
        const updateProductes = producteService.updateProducte(producteID, body);
        res.send({ status: "OK", data: updateProductes });
      } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
};

const deleteProducte = (req, res) => {
    const {
        params: { producteID },
      } = req;
    
      if (!producteID) {
        res.status(400).send({
          status: "FAILED",
          data: { error: "Parameter ':producteID' can not be empty" },
        });
      }
    
      try {
        producteService.deleteProducte(producteID);
        res.status(204).send({ status: "OK" });
      } catch (error) {
        res
          .status(error?.status || 500)
          .send({ status: "FAILED", data: { error: error?.message || error } });
      }
};

module.exports = {
    getAllProductes,
    getProducte,
    createProducte,
    updateProducte,
    deleteProducte
};
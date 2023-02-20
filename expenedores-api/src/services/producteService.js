const { v4: uuid } = require("uuid");
const Producte = require("../database/producte");

const getAllProductes = (filterParams) => {
    try {
        const allProductes = Producte.getAllProductes(filterParams);
        return allProductes;
      } catch (error) {
        throw error;
      }
};

const getProducte = (producteID) => {
    try {
        const producte = Producte.getProducte(producteID);
        return producte;
      } catch (error) {
        throw error;
      }};

const createProducte = (newProducte) => {
    const producteToInsert = {
        ...newProducte,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
      };
      try {
        const createdProducte = Producte.createProducte(producteToInsert);
        return createdProducte;
      } catch (error) {
        throw error;
      }
};

const updateProducte = (producteID, changes) => {
    try {
        const updateProductes = Producte.updateProducte(producteID, changes);
        return updateProductes;
      } catch (error) {
        throw error;
      }};

const deleteProducte = (producteID) => {
    try {
        Producte.deleteProducte(producteID);
      } catch (error) {
        throw error;
      }};

module.exports = {
    getAllProductes,
    getProducte,
    createProducte,
    updateProducte,
    deleteProducte
};
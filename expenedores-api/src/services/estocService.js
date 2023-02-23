const { v4: uuid } = require("uuid");
const Estoc = require("../database/estoc");

const getAllEstocs = (filterParams) => {
    try {
        const allEstocs = Estoc.getAllEstocs(filterParams);
        return allEstocs;
      } catch (error) {
        throw error;
      }
};

const getEstoc = (estocID) => {
    try {
        const estoc = Estoc.getEstoc(estocID);
        return estoc;
      } catch (error) {
        throw error;
      }};

const createEstoc = (newEstoc) => {
    const estocToInsert = {
        ...newEstoc,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
      };
      try {
        const createdEstoc = Estoc.createEstoc(estocToInsert);
        return createdEstoc;
      } catch (error) {
        throw error;
      }
};

const updateEstoc = (estocID, body) => {
    try {
        const updateEstocs = Estoc.updateEstoc(estocID, body);
        return updateEstocs;
      } catch (error) {
        throw error;
      }};

const deleteEstoc = (estocID) => {
    try {
        Estoc.deleteEstoc(estocID);
      } catch (error) {
        throw error;
      }};

module.exports = {
    getAllEstocs,
    getEstoc,
    createEstoc,
    updateEstoc,
    deleteEstoc
};
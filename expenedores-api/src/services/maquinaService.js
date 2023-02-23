const Producte = require("../database/maquina");

const getAllMaquines = (filterParams) => {
    try {
        const allMaquines = Producte.getAllMaquines(filterParams);
        return allMaquines;
    } catch (error) {
        throw error;
    }
};

const getMaquina = (maquinaID) => {
    try {
        const maquina = Producte.getMaquina(maquinaID);
        return maquina;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllMaquines,
    getMaquina
};
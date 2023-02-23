const maquinaService = require("../services/maquinaService");

const getAllMaquines = (req, res) => {
    const { mode } = req.query;
    try {
        const allMaquines = maquinaService.getAllMaquines({ mode });
        res.send({ status: "OK", data: allMaquines });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getMaquina = (req, res) => {
    const {
        params: { maquinaID },
    } = req;

    if (!maquinaID) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':maquinaID' can not be empty" },
        });
        return;
    }

    try {
        const maquina = maquinaService.getMaquina(maquinaID);
        res.send({ status: "OK", data: maquina });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

module.exports = {
    getAllMaquines,
    getMaquina
};
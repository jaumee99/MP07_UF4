/*
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('expenedores.db');

const getAllEstocs = () => {
    db.all("SELECT * FROM Estoc", (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const getEstoc = (estocID) => {
    db.all("SELECT * FROM Estoc WHERE ID = ?", estocID, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const createEstoc = (estoc) => {
    console.log(estoc.ID, estoc.Producte, estoc.Caducitat, estoc.DataVenda, estoc.Ubicacio);
    db.run("INSERT INTO Estoc (ID, Producte, Caducitat, Data Venda, Ubicacio) VALUES (?, ?, ?, ?, ?)", [estoc.ID, estoc.Producte, estoc.Caducitat, estoc.DataVenda, estoc.Ubicacio], (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Estoc created");
        }
    });
}

const updateEstoc = (estocId, body) => {
    db.run("UPDATE Estoc SET ID = ?, Producte = ?, Caducitat = ?, Data Venda = ?, Ubicacio = ? WHERE ID = ?", [body.ID, body.Producte, body.Caducitat, body.DataVenda, estocId, estoc.Ubicacio], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const deleteEstoc = (estocID) => {
    db.run("DELETE FROM Estoc WHERE ID = ?", estocID, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

module.exports = {
    getAllEstocs,
    getEstoc,
    createEstoc,
    updateEstoc,
    deleteEstoc
};
*/
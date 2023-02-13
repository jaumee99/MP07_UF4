var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('Expenedores.db');

const getAllProductes = () => {
    db.all("SELECT * FROM Productes", (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const getProducte = (producteID) => {
    db.all("SELECT * FROM Productes WHERE id = ?", producteID, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const createProducte = (producteID) => {
    db.run("INSERT INTO Productes (nom, preu, stock, id_categoria, id_proveidor) VALUES (?, ?, ?, ?, ?)", producteID, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const updateProducte = (producteID) => {
    db.run("UPDATE Productes SET nom = ?, preu = ?, stock = ?, id_categoria = ?, id_proveidor = ? WHERE id = ?", producteID, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const deleteProducte = (producteID) => {
    db.run("DELETE FROM Productes WHERE id = ?", producteID, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

module.exports = {
    getAllProductes,
    getProducte,
    createProducte,
    updateProducte,
    deleteProducte
};
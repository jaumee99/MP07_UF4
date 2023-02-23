var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('expenedores.db');

const getAllProductes = () => {
    db.all("SELECT * FROM Producte", (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const getProducte = (producteID) => {
    db.all("SELECT * FROM Producte WHERE Nom = ?", producteID, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const createProducte = (producte) => {
    console.log(producte.Nom, producte.Tipus, producte.Preu, producte.Categoria);
    db.run("INSERT INTO Producte (Nom, Tipus, Preu, Categoria) VALUES (?, ?, ?, ?)", [producte.Nom, producte.Tipus, producte.Preu, producte.Categoria], (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Producte created");
        }
    });
}

const updateProducte = (producteId, body) => {
    db.run("UPDATE Producte SET Nom = ?, Tipus = ?, Preu = ?, Categoria = ? WHERE Nom = ?", [body.Nom, body.Tipus, body.Preu, body.Categoria, producteId], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const deleteProducte = (producteID) => {
    db.run("DELETE FROM Producte WHERE Nom = ?", producteID, (err, rows) => {
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
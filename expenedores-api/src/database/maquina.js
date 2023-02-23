var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('expenedores.db');

const getAllMaquines = () => {
    db.all("SELECT * FROM Maquina", (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

const getMaquina = (maquinaID) => {
    db.all("SELECT * FROM Maquina WHERE ID = ?", maquinaID, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
    });
}

module.exports = {
    getAllMaquines,
    getMaquina
};
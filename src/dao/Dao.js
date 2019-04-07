const connection = require("../config/Database");

class Dao {

    constructor(table = null) {
        this._table = table;
        this._connection = connection;
    }


    findAll(fields = []) {
        const isInformatedFieldsReturned = fields.length > 0
        if (isInformatedFieldsReturned) {
            fields = fields.join(", ");
        } else {
            fields = "*";
        }

        const sql = `SELECT ${fields} FROM ${this._table}`;
        return new Promise((resolve, reject) => {
            this._connection.query(sql, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            })
        });
    }

    create(newRegister = {}) {
        const fields = this.getFieldsTable().join(", "); 
        let sql = `INSERT INTO ${this._table}(${fields}) VALUES(`;
        sql += this.getFieldsTable.map(field => `${newRegister[field]}`).join(", ");
        sql += ")";
        return new Promise((resolve, reject) => {
            this._connection.query(sql, (err, results) => {
                if (err) {
                    reject(err);
                } 
                resolve();
            })
        });
    }

    getConnection() {
        return this._connection;
    }

    getFieldsTable() {
        throw new Error("Need informated fields table with array!");
    }

}

module.exports = Dao;
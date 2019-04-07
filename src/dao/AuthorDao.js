const Dao = require("./Dao");

class AuthorDao extends Dao {

    constructor() {
        super("authors");
    }

    getFieldsTable() {
        return ["name", "email"];
    }
}

module.exports = AuthorDao;
const Dao = require("./Dao");

class BookDao extends Dao {

    constructor() {
        super("books");
    }

    getFieldsTable() {
        return ["title", "summary", "author_id"];
    }
}

module.exports = BookDao;
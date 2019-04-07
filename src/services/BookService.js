const BookDao = require("../dao/BookDao");

class BookService {

    constructor() {
        this._dao = new BookDao();
    }

    async findAll(fields = []) {
        return await this._dao.findAll(fields);
    }

    async create(newRegister) {
        this._checkDataValid(newRegister);
        return await this._dao.create(newRegister);
    }

    _checkDataValid(data) {
        const invalidsFields = [];

        if (!data.title) {
            invalidsFields.push("title");
        }

        if (!data.summary) {
            invalidsFields.push("summary");
        }

        if (!data.author_id) {
            invalidsFields.push("author");
        }

        const existFieldsInvalids = invalidsFields.length > 0;
        if (existFieldsInvalids) {
            const fields = invalidsFields.join(", ");
            const message = `The fiels: ${fields} is requireds!`;
            throw new Error(message);
        }
    }
}

module.exports = BookService;
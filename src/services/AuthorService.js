const AuthorDao = require("../dao/AuthorDao");

class AuthorService {

    constructor() {
        this._dao = new AuthorDao();
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

        if (!data.name) {
            invalidsFields.push("name");
        }

        if (!data.email) {
            invalidsFields.push("email");
        }

        const existFieldsInvalids = invalidsFields.length > 0;
        if (existFieldsInvalids) {
            const fields = invalidsFields.join(", ");
            const message = `The fiels: ${fields} is requireds!`;
            throw new Error(message);
        }
    }
}

module.exports = AuthorService;
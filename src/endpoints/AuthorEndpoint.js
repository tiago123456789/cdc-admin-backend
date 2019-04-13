const AuthorService = require("../services/AuthorService");

class AuthorEndpoint {

    constructor() {
        this._bo = new AuthorService();
        this.findAll = this.findAll.bind(this);
        this.create = this.create.bind(this);
    }

    async findAll(request, response, next) {
        try {
            const authors = await this._bo.findAll();
            response.json(authors);
        } catch(e) {
            next(e);
        }
    }

    async create(request, response, next) {
        try {
            const newRegister = request.body;
            await this._bo.create(newRegister);
            response.sendStatus(201);
        } catch(e) {
            next(e);
        }
    }
}

module.exports = AuthorEndpoint;
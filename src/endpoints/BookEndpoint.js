const BookBo = require("../services/BookService");

class BookEndpoint {

    constructor() {
        this._bo = new BookBo();
        this.findAll = this.findAll.bind(this);
        this.create = this.create.bind(this);
    }

    async findAll(request, response, next) {
        try {
            const books = await this._bo.findAll();
            response.json(books);
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

module.exports = BookEndpoint;
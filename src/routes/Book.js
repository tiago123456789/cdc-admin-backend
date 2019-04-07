const BookEnpoint = require("../endpoints/BookEndpoint");
const bookEndpoint = new BookEnpoint();

module.exports = (router) => {

    router.get("", bookEndpoint.findAll);
    router.post("", bookEndpoint.create);

    return router;
}
const AuthorEnpoint = require("../endpoints/AuthorEndpoint");
const authorEndpoint = new AuthorEnpoint();

module.exports = (router) => {

    router.get("", authorEndpoint.findAll);
    router.post("", authorEndpoint.create);

    return router;
}
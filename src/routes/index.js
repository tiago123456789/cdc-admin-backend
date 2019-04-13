const express = require("express");
const bookRoute = require("./Book");
const authorRoute = require("./Author");
const handlerError = require("../middleware/HandlerError");

module.exports = (app) => {

    app.use("/books", bookRoute(express.Router()));
    app.use("/authors", authorRoute(express.Router()));

    /**
     * @description Middleware handler error.
     */
    app.use(handlerError);
}
const express = require("express");
const bookRoute = require("./Book");
const authorRoute = require("./Author");

module.exports = (app) => {

    app.use("/books", bookRoute(express.Router()));
    app.use("/authors", authorRoute(express.Router()));
}
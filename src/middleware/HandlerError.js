module.exports = (err, request, response, next) => {
    response.status(400).json({ statusCode: 400, message: err.message })
};
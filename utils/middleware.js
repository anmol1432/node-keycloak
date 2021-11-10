// Middleware

module.exports = function middleware(req, res, next) {
    console.log("middlware")
    next()
    return ("")
}
module.exports = {
    rLM: (req, res, next) => {
        console.log(req.query.theQuery)
        next()
    },
    display: (req, res) => {
        console.log('2nd console log:', req.query.theQuery)
    }
}
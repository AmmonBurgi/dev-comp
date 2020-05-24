require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      {SERVER_PORT, CONNECTION_STRING} = process.env,
      port = SERVER_PORT,
      app = express()

app.use(express.json())

// vv example of express static file middleware. This gives a path to the public folder that can be accessed in the front end.
app.use(express.static('public'))

// vv Request-level middleware is the middleware that's used with the request.
// vv REST query examples
// app.get(path, ctrl)
// app.put(path, ctrl)
// app.post(path, ctrl)
// app.delete(path, ctrl)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('db connected')
    app.listen(port, () => console.log(`Server listening on port ${port}`))
})
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
dotenv.config({ path: './config.env' })
const app = express()
const port = process.env.PORT
const db = process.env.DATABASE

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }).then(() => {
    console.log("MONGO DB CONNECTED");
    app.listen(port, () => {
        console.log(`server runnig http://localhost:${port}`)
    })
}).catch((error) => {
    console.log(error)
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})


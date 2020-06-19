const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {MONGOURI} = require('./keys')
const PORT = 5000


//connect database
mongoose.connect(MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.on('connected', () => {
    console.log('conncected to mongooes done!')
})
mongoose.connection.on('error', (err) => {
    console.log(`Error Connection ${err}`)
})


require('./models/User')
require('./models/Post')
app.use(express.json())
app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))

//server connection
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})
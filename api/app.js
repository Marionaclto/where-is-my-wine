require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const apiRoutes = require('./routes')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('./api', apiRoutes)

//Check if it works 
app.get('/', (req, res) => {
    res.send({
        message: 'This is working fine'
    })
})

//Check if it listens the changes
/*app.get('/api', (req, res) => {
    res.send({
        message: 'Is it?'
    })
})*/

app.listen(process.env.API_PORT, () => {
    console.log(`Starting server in port ${process.env.API_PORT}`)
})
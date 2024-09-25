// In this file will be defined the algorithm 
const express = require('express') 
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes')(app)

sequelize.sync()
.then(() =>{
    app.listen(process.env.PORT || 8081)
    console.log(`Server stated on port ${config.port}`)
})



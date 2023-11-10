const epxress = require('express')
const cors = require('cors')
require('dotenv').config()
const dbConnection = require('./db.connection')
const rotues = require('./routes/main/main')

const app = epxress()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(epxress.json())
app.use(epxress.urlencoded({extended:false}))

dbConnection()
app.use(rotues)

app.listen(PORT, () => {
  console.log("Server is runing on port" + PORT)
})
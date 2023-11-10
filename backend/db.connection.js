const mongoose = require('mongoose')

async function dbConecction(){
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log('DB Connection established successfully...')
  } catch (error) {
    console.log(error)
  }
}

module.exports = dbConecction
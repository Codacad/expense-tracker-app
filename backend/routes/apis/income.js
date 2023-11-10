const Income = require('../../models/Income')

const createIncome = async (req, res) => {
  const {category, amount, date, description} = req.body
  try {
    if(!category || !amount || !date){
      res.status(501).send({message:"All fields are required!"})
    } else {
      const newIncome = await Income.create({category, amount, description, date})
      res.status(200).send({message:"Income added"})
    }
  } catch (error) {
    res.send(error)
  }
}
const getIncome = async (req, res) => {  
  try {
    const getIncomes = await Income.find({})
    res.status(200).send(getIncomes)
  } catch (error) {
    res.send(error)
  }
}

module.exports = {createIncome, getIncome}
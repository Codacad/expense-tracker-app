const Expense = require('../../models/Expense')

const createExpense = async (req, res) => {
  const {category, amount, description, date} = req.body
  try {
    if(!category || !amount || !date){
      res.status(501).send({message:"All fields are required!"})
    } else {
      const newExpense = await Expense.create({category, amount, description, date})
      res.status(200).send({message:"Expanse Added"})
    }
  } catch (error) {
    res.send(error)
  }
}
const getExpense = async (req, res) => {  
  try {
    const getExpense = await Expense.find({})
    res.status(200).send(getExpense)
  } catch (error) {
    res.send(error)
  }
}

module.exports = {createExpense, getExpense}
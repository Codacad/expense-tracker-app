const router = require('express').Router()
const {createIncome, getIncome} = require('../apis/income')
const {createExpense, getExpense} = require('../apis/expense')

router.get('/', async (req, res) => {
  res.status(200).send("Hello")
})

router.get(`/${process.env.INCOME_API}`, getIncome)
router.post(`/${process.env.INCOME_API}`, createIncome)
router.get(`/${process.env.EXPENSE_API}`, getExpense)
router.post(`/${process.env.EXPENSE_API}`, createExpense)

router.get('/*', (req, res) => {
  res.status(400).send("<h1>404 Page not found...</h1>")
})

module.exports = router
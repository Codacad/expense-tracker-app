const mongoose = require("mongoose");

const expenseSchema = mongoose.Schema({
  category: { 
    type: String, 
    require: true 
  },
  amount: { 
    type: Number, 
    require: true 
  },
  description: { 
    type: String   
  },
  date: { 
    type: Date, 
    require: true, 
    default: new Date() 
  }
}, {timestamps:true});

const Expense = mongoose.model("Expense", expenseSchema)
module.exports = Expense
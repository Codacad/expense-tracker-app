const mongoose = require("mongoose");

const incomeSchema = mongoose.Schema({
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

const Income = mongoose.model("Income", incomeSchema)
module.exports = Income
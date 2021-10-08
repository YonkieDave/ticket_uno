const butgetDB = require('../models/budgetModel');


module.exports.getBudgetTable = async () => {
    let result = await butgetDB.getBudgets() ;  
    return result;
}
module.exports.addBudget = async (budget) => {
    let result = await butgetDB.addBudget(budget) ;  
    return result;
}
module.exports.getUpdate = async (data) => {
    let result = await butgetDB.getUpdate(data);  
    return result;
}
module.exports.updateBudget = async (data) => {
    let result = await butgetDB.updateBudget(data);  
    return result;
}


const sequelize = require('../../db/conection');


module.exports.getBudgets = async () => {
    
     let result = await sequelize.query(`SELECT * FROM budget`);
     //console.log(`resultado --->  ${JSON.stringify(result)}   Logitud ${result[0].length}`)   
     if (result[0].length == 0) {
           return false;
        }else{
       //    console.log("Resultado desde el modelo ---> ", result) 
           return (result);
        
    }
}
module.exports.addBudget = async (budget) => {
    try {
    let result = await sequelize.query(`INSERT INTO budget (create_date,project,version,update_date) 
    VALUES (GETDATE(),'${budget.project}',${budget.version},GETDATE())`);
    return true;
    } catch (error) {
        return false;
    }
       
}
module.exports.getUpdate = async (budget) => {
    try {
    let result = await sequelize.query(`SELECT * FROM budget WHERE budget_id = ${budget}`);
    return result;
    } catch (error) {
        return false;
    }
       
}
module.exports.updateBudget = async (budget) => {
    console.log("Este es el budet que va para la consulta --> ", budget);
    console.log(`actualizar proyecto ---> ${budget.project}, version --> ${budget.version}, id ----> ${budget.id}`);
    try {
    //    console.log(`actualizar proyecto ---> ${budget[0][0].project}, version --> ${budget[0][0].version}, id ----> ${budget[0][0].id}`)
    let result = await sequelize.query(`UPDATE budget SET project = '${budget[0][0].project}',version = '${budget[0][0].version}', update_date = GETDATE() WHERE budget_id = '${budget[0][0].id}' `);
    return true;
    

}
    catch (error) {
        return false;
    }
       
}


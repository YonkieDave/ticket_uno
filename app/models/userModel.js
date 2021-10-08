const sequelize = require('../../db/conection');
const login = require('../views/login');


module.exports.userExist = async (usr) => {
    
     let result = await sequelize.query(`SELECT * FROM users WHERE user_name = '${usr.user}' AND user_pass = '${usr.pass}'`);
     //console.log(`resultado --->  ${JSON.stringify(result[0][0].rol)}   Logitud ${result[0].length}`)   
     if (result[0].length == 0) {
           return false;
        }else{
            let  resp = [JSON.stringify(result[0][0].user_name),JSON.stringify(result[0][0].rol)]; 
           return (true, resp );
        
    }
}

module.exports.users = async () => {
    try {
        let result = await sequelize.query('SELECT * FROM users')
        return result
    } catch (err) {
        throw new Error(err)
    }
}


module.exports.usersUpdate = async () => {
    try {
        let result = await sequelize.query('UPDATE id_cliente, correo, contraseña, rol FROM usuarios WHERE')
        return result
    } catch (err) {
        throw new Error(err)
    }
}

module.exports.usersDelete = async (usr) => {
    try {
        let result = await sequelize.query(`DELETE FROM usuarios WHERE correo = '${usr.correo}' `)
        return result
    } catch (err) {
        throw new Error(err)
    }
}
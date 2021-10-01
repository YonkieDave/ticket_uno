const sequelize = require('../../db/conection');


module.exports.userExist = async (usr) => {
    let user = [usr.user, usr.password]
    console.log(user);
    try {
        let result = await sequelize.query(`SELECT * FROM users WHERE user_id = '${user[0]}'`);
        if (result) {
            let verify = await sequelize.query(`SELECT * FROM users WHERE pass = '${user[1]}'`);
            if (verify) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } catch (err) {
        throw new Error(err)
    }
}

module.exports.users = async () => {
    try {
        let result = await sequelize.query('SELECT * FROM usuarios')
        return result
    } catch (err) {
        throw new Error(err)
    }
}
module.exports.usersTable = async () => {
    try {
        let result = await sequelize.query('SELECT id_cliente, correo, contraseña, rol FROM usuarios')
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
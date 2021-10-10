const userDB = require('../models/userModel');
const jwt = require('jsonwebtoken');


module.exports.userList = async () => {
    try {
        let result = await userDB.users()
        return result
    } catch (err) {
        throw new Error('DB Error')
    }
}

module.exports.userValidate = async (usr) => {
    try {
        let result = await userDB.userExist(usr)
        if (result) {

            console.log("Resultado devuelto login correcto ",result);
            return result;
        } else {
            throw new Error('User does not exist');
        }
    } catch (err) {
        throw new Error(err)
    }
}

module.exports.resetPass = async (usr) => {
    try {
        let result = await userDB.resetPass(usr)
        if (result.length > 0) {
            return result;
        } else {
            throw new Error('Algo salió mal durante la actualización');
        }
    } catch (err) {
        throw new Error(err)
    }
}
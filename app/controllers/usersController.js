const userDB = require('../models/userModel');
const jwt = require('jsonwebtoken');
const {promisify} = require('util');



module.exports.tokenGeneration = async (data) => {
    console.log("generación del token ", data);
    const result = jwt.sign({ data }, process.env.SECRET_KEY);
    console.log("Token generado", result);
    return result
}

module.exports.userVerify = async (token) => {
    const result = jwt.verify(token, process.env.SECRET_KEY)
    if (result) {
        return result
    } else {
        throw new Error('Invalid Token')
    }
}

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

module.exports.validateUserLogin = async (req, res, next) => {
console.log("Datos del usuario ", req.body);
if(req.user && req.pass){
    return next;
}else{
    return false;
}

}
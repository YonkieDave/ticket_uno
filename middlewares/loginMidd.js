const jwt = require('jsonwebtoken');
const {promisify} = require('util');
const dbUser = require('../app/models/userModel');


module.exports.validateUserLogin = (req, res, next) => {
console.log("Datos del usuario ", req.body);
try {
    if(req.body.user != '' && req.body.pass != ''){
        console.log("con contraseña y password")
        return next();
    }else{
            return(res.render('./login',{
                alert:true,
                alertTitle: "Advertencia",
                alertMessage: "Ingrese ambos campos por favor (usuario y password)",
                alertIcon: 'info',
                showConfirmButton:true,
                timer: '',
                ruta: 'login'

            })
        )
    }
        
} catch (error) {
 return error;   
}
}

module.exports.userAuth = async (req, res, next) => {
    console.log("this is the requ in the middAuth---> ",req.cookies.session_jwt);
    if(req.cookies.session_jwt){
        try {
            let session = await promisify(jwt.verify)(req.cookies.session_jwt, process.env.SECRET_KEY);
            let result = await dbUser.userAuth(session);
            console.log("resultado ----> ", result)

            if(!result){
                return next();
            }
            req.user_name = result[0][1];
            return next();
        } catch (error) {
            console.log("Hubo un error", error)
            return next();
        }
    }else{
        res.redirect('/login');
    }
}
module.exports.logout = (req, res) =>{
    console.log(res.clearCookie());
    res.clearCookie('session_jwt');
    return res.redirect('/login');
}

module.exports.validateUserReset = async (req, res, next) => {
    console.log("Datos del usuario ", req.body);
    try {
        if(req.body.userReset != '' && req.body.newPass != ''){
            let result = await dbUser.validateUserResetPass(req.body.userReset);
            console.log("Tameño de la respuesta ", result[0].length );
            if(result[0].length > 0){
                return next();
            }else{
                return(res.render('./resetPass',{
                    alert:true,
                    alertTitle: "Advertencia",
                    alertMessage: "El usuario no existe en la Base de datos",
                    alertIcon: 'info',
                    showConfirmButton:true,
                    timer: '',
                    ruta: 'resetPass'
    
                })
                )
            }
            
        }else{
                return(res.render('./resetPass',{
                    alert:true,
                    alertTitle: "Advertencia",
                    alertMessage: "Ingrese ambos campos por favor (usuario y password)",
                    alertIcon: 'info',
                    showConfirmButton:true,
                    timer: '',
                    ruta: 'resetPass'
    
                })
            )
        }
            
    } catch (error) {
     return error;   
    }
}
    
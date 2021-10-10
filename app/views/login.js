const sequelize = require('../../db/conection');
const userController = require('../controllers/usersController');
const middLogin = require('../../middlewares/loginMidd');
const jwt = require('jsonwebtoken');

module.exports = (app) => {

    app.get('/login', async (req, res) => {
        res.render('login');
    });
    
    app.post('/login', middLogin.validateUserLogin, async (req, res) =>{
        console.log("dentro del post de login", req.body);
        try {
        let result = await userController.userValidate(req.body);
        console.log("Resultado en la vista de login --> ", result[0],result[1],result[2]);
        let id = result[0];
        const token = jwt.sign({id:id}, process.env.SECRET_KEY, {
            expiresIn: process.env.EXP_TOKEN
        });
        console.log("Token generado ", token);

        const cookiesOptions = {
            expires: new Date(Date.now()+process.env.EXP_COOKIE * 24 * 60 * 60 * 1000),
            httpOnly: true
        };
        res.cookie('session_jwt', token, cookiesOptions);
            
         res.render('login',{
            alert:true,
            alertTitle: "Logueado ",
            alertIcon: "succes",
            alertMessage: "Usuario Logueado con exito",
            showConfirmButton: false,
            timer: 1000,
            ruta:'budgets',
         }); 
        } catch (error) {
            res.render('login',{
                alert:true,
                alertTitle: "Error ",
                alertIcon: "error",
                alertMessage: "uSUARIO Y/ O PASWORD INCORRECTOS, FAVOR DE VERIFICAR",
                showConfirmButton: true,
                timer: '',
                ruta:'login',
        });
    }
 });


 app.get('/login', async (req, res) => {
    res.render('login');
});

app.get('/logout', middLogin.logout);

}



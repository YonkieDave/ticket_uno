const sequelize = require('../../db/conection');
const cors = require('cors');
const userController = require('../controllers/usersController');
const middLogin = require('../../middlewares/loginMidd');

module.exports = (app) => {

    app.get('/login', async (req, res) => {
        res.render('login');
    });


    app.post('/auth', async (req, res) => {
        //console.log("Este es el usuario qwue quiere autenticarse",  req.body);
        //let user = req.body;
        //console.log(`Este es el usuario qwue quiere autenticarse  ${user}`);
        try {            
            if(req.body.user && req.body.pass){
                let result = await userController.userValidate(req.body);
                console.log("Resultado en la vista de login --> ", result[0],result[1]) 
                
                    req.session.loggedin = true;
                    req.session.name = result[0];
                    req.session.rol = result[1];
                    res.render('login',{
                    alert:true,
                    alertTitle: "Logueo exitoso",
                    alertMessage: "Usuario Logueado",
                    alertIcon: "succes",
                    showConfirmButton: false,
                    timer: 2000,
                    ruta:'budgets',
            });   
        }else{
            res.render('login',{
                alert: true,
                alertTitle: "Error",
                alertMessage: "Ambos campos son requeridos, favor de validar",
                alertIcon: "error",
                showConfirmButton: true,
                timer: '',
                ruta:'login'
            });

        }
    } catch (err) {
            res.render('login',{
                alert: true,
                alertTitle: "Error",
                alertMessage: "Usuario y/o contraseña incorrectos",
                alertIcon: "error",
                showConfirmButton: true,
                timer: '',
                ruta:'login'
            });
        }
    });

    app.get('/logout',(req, res) =>{
        req.session.destroy(()=>{
            res.redirect('/login');
        })
    });

    app.post('/login', async (req, res) =>{
        console.log("dentro del post de login");
    });


}


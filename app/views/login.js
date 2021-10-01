const sequelize = require('../../db/conection');
const cors = require('cors');
const userController = require('../controllers/usersController');
//const midd = require('../../middlewares/');

module.exports = (app) => {

    app.get('/login', async (req, res) => {
        res.render('login');
    });

    app.post('/login', async (req, res) => {
        let user = req.body
        try {
            let result = await userService.userValidate(user)
            if (result) {
                console.log("Se va a generar el token de inicio de sesion ", result);
                let token = await userController.tokenGeneration(user.user);
                console.log("token de inicio de sesion ", token);
                res.json(token)
            }
        } catch (err) {
            res.status(400).send('Unregistered user')
        }
    });

}
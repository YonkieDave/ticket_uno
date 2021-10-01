const sequelize = require('../../db/conection');
const cors = require('cors');
//const midd = require('../../middlewares/');

module.exports = (app) => {

    app.get('/index', async (req, res) => {
        res.render('index');
    });

}
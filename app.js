const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
//const cookieParser = require('cookie-parser');
const  ejsLint  =  require ( 'ejs-lint' ) ;
require('dotenv').config();
/*
const session = require('express-session');
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}))
*/
const sequelize = require('./db/conection');
const loginView = require('./app/views/login');
const budgetView = require('./app/views/budget');

//urlencode captura los datos del formulario
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//cookie
app.use(cookieParser());

async function serverStart() {
    try {
      await sequelize.authenticate();
      console.log('Correct conexion');
      app.listen(process.env.SERVER_PORT,  () => {
        console.log(`Sistem start http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
      });
    } catch (error) {
      console.error('DB conexion error:', error);
    }
  }
  
  serverStart();
  
  loginView(app);
  budgetView(app);
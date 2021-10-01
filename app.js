const express = require('express');
const app = express();
require('dotenv').config();

const sequelize = require('./db/conection');
const loginView = require('./app/views/login');
const indexView = require('./app/views/index');



app.use(express.json())

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

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
  indexView(app);
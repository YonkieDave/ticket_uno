const sequelize = require('../../db/conection');
const budgetController = require('../controllers/budgetController');
const loginMidd = require('../../middlewares/loginMidd');

module.exports = (app) => {

    app.get('/budgets', loginMidd.userAuth, async (req, res) => {
        
            try {
                let response = await budgetController.getBudgetTable();
                //console.log("RESULTADO CONSULTA ", response);
                res.render('budgets',{
                    response:response
                }); 
            } catch (err) {
                res.status(400).send('An unexpected error occurred')
            }
       
    });
    app.post('/addBudget', async (req, res) => {
        console.log(req.body);
            try {
                await budgetController.addBudget(req.body);
                //console.log("RESULTADO CONSULTA ", response);
                
                res.render('presupuestos',{
                    alert: true,
                    alertTitle: "Agregado",
                    alertMessage: "El presupuesto se ha agregado con exito",
                    alertIcon: "succes",
                    showConfirmButton: false,
                    timer: 2500,
                    ruta:'presupuestos'
                   
                });
                return true; 
            } catch (err) {
                res.render('presupuestos',{
                    alert: true,
                    alertTitle: "Ooops !!",
                    alertMessage: "No ha sido posible agregar el presupuesto",
                    alertIcon: "succes",
                    showConfirmButton: '',
                    timer: false,
                    ruta:'presupuestos'
                });
            }
    });
    app.get('/editBudget/:id',async (req, res)=>{
        let id = req.params.id;
        result = await budgetController.getUpdate(id);
        //console.log("Results para la vista editar ---> ", result)
        
        res.render('editBudget',{results:result});
    });

    app.post('/editBudget',async (req, res)=>{
        console.log("Datos para el update -->", req.body);
        let budget = req.body;
        try {
        result = await budgetController.updateBudget(budget);
        console.log("resultado del update", result);
        res.render('editBudget',{
                alert: true,
                alertTitle: "Actualizado",
                alertMessage: "El presupuesto ha sido actualizado",
                alertIcon: "succes",
                showConfirmButton: false,
                timer: 2500,
                ruta:'budgets'
        });
               
            } catch (error) {
                res.render('editBudget',{results:result,
                    alert: true,
                    alertTitle: "Error",
                    alertMessage: "Ha ocurrido un error, intentelo de nuevo",
                    alertIcon: "error",
                    showConfirmButton: true,
                    timer: '',
                    ruta:'budgets'
            });
            }
        });

    app.get('/registerBudget', (req,res)=>{
        res.render('registerBudget',{ });
    });

    app.get('/newBudget', async (req,res)=>{
       
        let response = await budgetController.getBudgetTable();
        res.render('newBudget',{response:response});
        });           
}
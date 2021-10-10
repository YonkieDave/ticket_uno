
const login = async () => {
  let user = document.getElementById('user').value;
  let pass = document.getElementById('pass').value;
  let data = {
     user: user ,
     pass: pass
  };

    console.log("User pal fetch", data);
    try {
      result = await fetch('http://localhost:3000/login', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        }
      })
      .then(response =>  Swal.fire({
        title: 'Logueado',
        text: 'Loguin con exito',
        icon: 'succes',
        showConfirmButton: false,
        timer: '1000'
     }).then(()=>{
        window.location = '/budgets'
     })
     )
      console.log("Resultado del fetch ", result);
          } catch (error) {
      return alert("Error desconocido");
    }
       
  }

const createBudget = async () =>{
    let newBudget={};
    $('input').each(function() {
        newBudget[this.name] = this.value;
    });
    console.log(newBudget);
    
        await fetch('http://localhost:3000/addBudget', {
            method: "POST",
            body: JSON.stringify(newBudget),
            headers: {
                "content-type": "application/json"
            }
        })
       /* .then(function(res) { 
            return (Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Presupúesto creado con exito',
                showConfirmButton: false,
                timer: 2500
              }),res.json()); 
        });*/
   
       /* Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No es posible agregar el presupuesto!',
            showConfirmButton: true,
            timer: ''
            
          })*/
}
let newFlow = {};
  let idFlow = {
      cont: 0
  };
class Cash_flow {
    constructor(id,mounth,ingress,egress){
      this.id = id;
      this.mounth = mounth;
      this.ingress = ingress;
      this.egress = egress;
      this.total = ingress - egress;
      //this.total = egress;
      //this.egress = egress;
    }
}


$(document).ready(function() {
    //obtenemos el valor de los input
    
    $('#add_flow').click(function() {
      

      let fecha = document.getElementById("fecha_flow").value;
      let ingreso = document.getElementById("ingreso_flow").value;
      let egreso = document.getElementById("egreso_flow").value;
      console.log(`fecha---> ${fecha} ingreso ----> ${ingreso} egreso ----> ${egreso}` )
      newFlow[idFlow.cont] = new Cash_flow(idFlow.cont,fecha, ingreso, egreso);
      
      console.log("Objeto ---> ",newFlow);
      let i = 1; //contador para asignar id al boton que borrara la fila

      let fila = `<tr id="row${i}">
                    <td id="row_date_flow" value="${newFlow[idFlow.cont].mounth}">${newFlow[idFlow.cont].mounth} </td>
                    <td>${newFlow[idFlow.cont].ingress}</td>
                    <td>${newFlow[idFlow.cont].egress}</td>
                    <td>${newFlow[idFlow.cont].ingress - newFlow[idFlow.cont].egress}</td>
                    <>
                    <td><button type="button" name="remove" id="${newFlow[idFlow.cont].id}" class="btn btn-danger btn_remove">Quitar</button></td>
                  </tr>`
      
      //'<tr id="row' + i + '"><td id="'+fecha+'">' + fecha + '</td><td>' + ingreso + '</td><td>' + egreso + '</td><td><button type="button" name="remove" id="' + i + '" class="btn btn-danger btn_remove">Quitar</button></td></tr>'; //esto seria lo que contendria la fila
      idFlow.cont++;
      i++;
    
      $('#flow_table tr:first').after(fila);
        $("#adicionados").text(""); //esta instruccion limpia el div adicioandos para que no se vayan acumulando
        //var nFilas = $("#flow_table tr").length;
        //$("#adicionados").append(nFilas - 1);
        //le resto 1 para no contar la fila del header
        

        document.getElementById("fecha_flow").value ="";
        document.getElementById("ingreso_flow").value = "";
        document.getElementById("egreso_flow").value = "";
        document.getElementById("fecha_flow").focus();
        
      });
    $(document).on('click', '.btn_remove', function() {
      var button_id = $(this).attr("id");
      $('#row' + button_id + '').remove(); //borra la fila
      deleteCashFlow(button_id);
        //cuando da click obtenemos el id del boton
        
      });
    });

    const deleteCashFlow = (id) => {
        console.log(id);
        if (newFlow.hasOwnProperty(id)) {
            console.log(newFlow[id]);
                delete newFlow[id];
                return true;
            }
        else{
            return false;
        }
    };
let flag = false;
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

    const createFlow = () =>{
      let date = document.getElementById('dateFlow').value;
      let ingress = document.getElementById('ingressFlow').value;
      let egress = document.getElementById('egressFlow').value;
      let acumulated = 0;
      let flowValues = Object.values(newFlow);
      

      console.log("Valores del objeto: ", Object.values(newFlow))
      console.log(`${date } ${ingress} ${egress}`);

      if(ingress == '' || date == '' || egress == ''){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ingresa todos los campos'
        })
      }else{
        if(flowValues.length == 0){
          newFlow[idFlow.cont] = new Cash_flow(idFlow.cont,date, ingress, egress);
          console.log(newFlow);
          let trFlowTable = document.createElement("tr");
          trFlowTable.setAttribute("id","row" + idFlow.cont)
          
          
          let newLine = `
          <td id="row_date_flow" value="${newFlow[idFlow.cont].mounth}">${newFlow[idFlow.cont].mounth} </td>
          <td >${newFlow[idFlow.cont].ingress}</td>
          <td >${newFlow[idFlow.cont].egress}</td>
          <td>${newFlow[idFlow.cont].ingress - newFlow[idFlow.cont].egress}</td>
          <td>${newFlow[idFlow.cont].ingress - newFlow[idFlow.cont].egress}</td>
          <td><button type="button" name="remove" id="${newFlow[idFlow.cont].id}" class="btn btn-danger btn_remove">Quitar</button></td>
      
          `
          trFlowTable.innerHTML += newLine;
          flowsAdded.appendChild(trFlowTable);
  
          idFlow.cont++;
          acumulated = newFlow[idFlow.cont].ingress - newFlow[idFlow.cont].egress;
        }else{
          for (let i = 0; i < flowValues.length; i++) {
            acumulated += flowValues[i].total;
          }
          newFlow[idFlow.cont] = new Cash_flow(idFlow.cont,date, ingress, egress);
          console.log(newFlow);
          let trFlowTable = document.createElement("tr");
          trFlowTable.setAttribute("id","row" + idFlow.cont)
          
          
          let newLine = `
          <td id="row_date_flow" value="${newFlow[idFlow.cont].mounth}">${newFlow[idFlow.cont].mounth} </td>
          <td>${newFlow[idFlow.cont].ingress}</td>
          <td>${newFlow[idFlow.cont].egress}</td>
          <td>${newFlow[idFlow.cont].ingress - newFlow[idFlow.cont].egress}</td>
          <td>${acumulated}</td>
          <td><button type="button" name="remove" id="${newFlow[idFlow.cont].id}" class="btn btn-danger btn_remove">Quitar</button></td>
      
          `
          trFlowTable.innerHTML += newLine;
          flowsAdded.appendChild(trFlowTable);
  
          idFlow.cont++;
        }
  
      }

      


      
      /*if(flowValues.length == 0){
        newFlow[idFlow.cont] = new Cash_flow(idFlow.cont,date, ingress, egress);
        console.log(newFlow);
        let trFlowTable = document.createElement("tr");
        trFlowTable.setAttribute("id","row" + idFlow.cont)
        
        
        let newLine = `
        <td id="row_date_flow" value="${newFlow[idFlow.cont].mounth}">${newFlow[idFlow.cont].mounth} </td>
        <td>${newFlow[idFlow.cont].ingress}</td>
        <td>${newFlow[idFlow.cont].egress}</td>
        <td>${newFlow[idFlow.cont].ingress - newFlow[idFlow.cont].egress}</td>
        <td>${newFlow[idFlow.cont].ingress - newFlow[idFlow.cont].egress}</td>
        <td><button type="button" name="remove" id="${newFlow[idFlow.cont].id}" class="btn btn-danger btn_remove">Quitar</button></td>
    
        `
        trFlowTable.innerHTML += newLine;
        flowsAdded.appendChild(trFlowTable);

        idFlow.cont++;
      }else{
        
        console.log("bandera antes del while ", flag)
        
          console.log("Dentro del while ")
          while (!flag) {
            for (let i = 0; i < flowValues.length; i++) {  
              if(flowValues[i].mounth == date){
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Esta fecha ya ha sido introducida'
                })
                flag = false
                return flag;
              }else{
                flag = true
                return flag;
              } 
            }
            return flag;
          } 
            console.log("esta es la bandera: ", flag);
            if(flag){
              for (let i = 0; i < flowValues.length; i++) {
                acumulated += flowValues[i].total;
              }
              
              newFlow[idFlow.cont] = new Cash_flow(idFlow.cont,date, ingress, egress);
              console.log(newFlow);
              let trFlowTable = document.createElement("tr");
              trFlowTable.setAttribute("id","row" + idFlow.cont)
              let newLine = `
              <td id="row_date_flow" value="${newFlow[idFlow.cont].mounth}">${newFlow[idFlow.cont].mounth} </td>
              <td>${newFlow[idFlow.cont].ingress}</td>
              <td>${newFlow[idFlow.cont].egress}</td>
              <td>${newFlow[idFlow.cont].ingress - newFlow[idFlow.cont].egress}</td>
              <td>${acumulated}</td>
              <td><button type="button" name="remove" id="${newFlow[idFlow.cont].id}" class="btn btn-danger btn_remove">Quitar</button></td>
              `
              trFlowTable.innerHTML += newLine;
              flowsAdded.appendChild(trFlowTable);

              idFlow.cont++;
            }else{
              return console.log("Error");
            }
        }*/       
    }
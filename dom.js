const cantidad = document.getElementById('id_cantidad')
console.log("Cantidad Value = " + cantidad.value)

const categoria = document.getElementById('id_categoria')
console.log(categoria.value)
categoriaInicial = categoria.value
console.log(categoriaInicial)

const totalCompra = document.getElementById('id_totalCompra')
//console.log(totalCompra)

var resumen = document.getElementById('id_resumen')
//console.log(resumen)

const valorTicket = 200

function calcular(){

  switch(categoria.value) {

      case "estudiante":
        //console.log ("la categoria es " + categoria.value)
        //console.log(" la cantidad es " + cantidad.value)
        resumen = valorTicket * cantidad.value * 0.20
        //console.log(resumen)
        break;

      case "trainee":
        //console.log ("la categoria es " + categoria.value)
        //console.log(cantidad.value)
        resumen = valorTicket * cantidad.value * 0.50
        //console.log(resumen)
      break;

      case "junior":
        //console.log ("la categoria es " + categoria.value)
        //console.log(cantidad.value)
        resumen = valorTicket * cantidad.value * 0.85
        //console.log(resumen)
      break;
  }
    
  console.log(resumen)
  console.log("el total a pagar es $ " + resumen)
  totalCompra.innerHTML= "Total a pagar $ " + resumen
  
}

function limpiarForm() {
  //console.log("limpiarForm ejecutándose")
  document.getElementById("id_formulario").reset();
  totalCompra.innerHTML="Total a pagar $"
}


    

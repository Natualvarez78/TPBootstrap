// const y variables

const precioTicket=            200

let descuentoEstudiante=       80

let descuentoTrainee=          50

let descuentoJunior=           15




// elementos de las variables

let cantidadTickets = document.getElementById ('cantidadEntradas')

let categoria = document.getElementById ('inputState')

let total_a_pagar = document.getElementById  ('totalCompra')





// quitar errores del formulario
function quitarClaseError() {
    let x = document.querySelectorAll(".form-control, .form-select");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove('is-invalid');
    }

    }

        

// calcular

function total_a_pagar() {

    quitarClaseError
     // Defino que  el total a pagar es igual a  multiplicar la cantidad de tickets por el precio segun la categoria

     let totalValorTickets = (cantidadTickets.value) * precioTicket;

     // Aplico descuentos según categoría
     
     if (categoria.value == 0) {
        totalValorTickets = totalValorTickets ;
    }
     if (categoria.value == 1) {
         totalValorTickets = totalValorTickets - (descuentoEstudiante/100 * totalValorTickets);
     }

     if (categoria.value == 2) {
         totalValorTickets = totalValorTickets - (descuentoTrainee/100 * totalValorTickets);
     }

     if (categoria.value == 3) {
         totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
     }
 
     // Inserto el valor en el HTML
     totalCompra.innerHTML = totalValorTickets;
 }
 
 // Se agrega un escuchador de evento para el Botón Resumen  y la funcion del cálculo
 botonResumen.addEventListener('click', total_a_pagar);
 
 function reset_total_a_pagar() {
    quitarClaseError();
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener('click', reset_total_a_pagar);
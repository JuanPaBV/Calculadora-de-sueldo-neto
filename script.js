const empleado = document.getElementById('nombreApellido');
const sueldoBruto = document.getElementById('sueldoBruto');
const sindicato = document.getElementById('afiliado?')
const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', () =>{

    if (empleado.value.trim() == "") {
        let etiquetaU = document.createElement('p');
        etiquetaU.appendChild(document.createTextNode("El campo no debe estar vacío, por favor ingrese su nombre y apellido"));
        document.getElementById("error1").appendChild(etiquetaU);
        setTimeout(() => {
          etiquetaU.remove();
      }, 3000);

      } else if (sueldoBruto.value < 1) {
        let etiquetaM = document.createElement('p');
        etiquetaM.appendChild(document.createTextNode("El salario a ingresar debe ser superior a $ 0"));
        document.getElementById("error2").appendChild(etiquetaM);
        setTimeout(() => {
          etiquetaM.remove();
      }, 3000);

      } else {
        calcularMonto(sueldoBruto.value);
      }
})

let salarioNeto = 0;
let jubilacion = sueldoBruto.value * 0.11;
let ley = sueldoBruto.value * 0.03;
let obraSocial = sueldoBruto.value * 0.03;
let afiliado = sueldoBruto.value * 0.015;
let ganancias = (sueldoBruto.value - 200000) * 0.35;

function calcularMonto(sueldoBruto){

    if(sindicato.checked == true) {
        if(sueldoBruto > 200000) {
            salarioNeto = sueldoBruto - jubilacion - ley - obraSocial - afiliado - ganancias;

            insertarElementos(salarioNeto)
        }
        else if(sueldoBruto <= 200000) {
            salarioNeto = sueldoBruto - jubilacion - ley - obraSocial - afiliado;

            ganancias = 0;
            insertarElementos(salarioNeto)
        }
    }
    else if(sindicato.checked == false) {
        afiliado = 0;
        if(sueldoBruto > 200000) {

            salarioNeto = sueldoBruto - jubilacion - ley - obraSocial - ganancias

            insertarElementos(salarioNeto)    
        }
        else if(sueldoBruto <= 200000) {
            salarioNeto = sueldoBruto - jubilacion - ley - obraSocial

            ganancias = 0;
            insertarElementos(salarioNeto)
        }
    }
}

function insertarElementos(salarioNeto) {
    document.getElementById("montoBruto").innerHTML= sueldoBruto.value;
    document.getElementById("montoJubilacion").innerHTML= jubilacion;
    document.getElementById("montoLey").innerHTML= ley;
    document.getElementById("montoObraSocial").innerHTML= obraSocial;
    document.getElementById("montoSindicato").innerHTML= afiliado;
    document.getElementById("montoImpGanancias").innerHTML= ganancias;
    document.getElementById("montoSueldoNeto").innerHTML= salarioNeto;
}
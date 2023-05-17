/**
 * 
 * var totalFilas=document.getElementById("cantidad").value;
var total=parseInt(totalFilas);
console.log(totalFilas);
console.log(total);
console.log(numeroFilas);
 
var numeroFilas = parseInt(prompt("Ingresa el número de filas:"));

var tabla = document.querySelector('.tabla');

for (var i = 0; i < numeroFilas; i++) {
  var celda = document.createElement('div');
  celda.className = 'celda';
  celda.textContent = 'Fila ' + (i + 1);
  tabla.appendChild(celda);
}

 */
const tabla=document.querySelector(".tablaPadre");
const numeroFilas=document.getElementById("cajaTexto").value;

const formulario=document.querySelector("#formulario");

formulario.addEventListener("submit",validar)
function validar(){
    const cantidad=document.querySelector("#cajaTexto").value
    document.getElementById("respuesta").innerHTML="Ingrese datos para sumarlos"

    for(let i=0;i<cantidad;i++){
        
        const input=document.createElement('input');
        input.className = 'tabla';
        input.type='number';
        
        tabla.appendChild(input);
    
    }
}
//ahora a sumar los valores
document.getElementById("calcular").addEventListener('click',sumar)

function sumar(){
    var valores=document.getElementsByClassName('tabla');
    var suma=0;
    for(let i=0;i<valores.length;i++){
        suma+=parseInt(valores[i].value);
    }
    document.getElementById("suma").innerHTML="La suma es: "+suma;

}
//ahora remplazmos a un parrafo


/**
 * 
for(let i=0;i<numeroFilas;i++){
    const div=document.createElement('div');
    tabla.appendChild(div);

}

 */
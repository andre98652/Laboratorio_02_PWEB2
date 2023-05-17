//primero capturamos los elemetos "ID"
var boton=document.getElementById("boton")
var parrafo=document.getElementById("invertido")

boton.addEventListener('click',invertir);

function invertir(){

    let texto=document.getElementById("cajaTexto").value;
    let invertido="";   
    //usamos un for a la inversa 
    for(let i=texto.length-1;i>=0;i--){
        invertido= invertido + texto.charAt(i);
    }
    
    document.getElementById("invertido").innerHTML=invertido;
////////////////////////////////////////////////////
//LO MISMO PERO USANDO SOMO METODOS
    
/*
    //La funcion split nos almacena en un array el string en caracteres
    var caracteres=texto.split('');
    //el reverse cambia de orden al array
    var elementosInvertidos=caracteres.reverse();
    //el join devuelve una matriz unida
    var palabraInvertida=elementosInvertidos.join('');
 */
    

}


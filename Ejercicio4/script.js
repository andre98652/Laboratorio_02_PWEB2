//Un ejemplo de como deve ser el link de meet
//var a="https://meet.google.com/gig-wohm-nag"


//Capturtamos nuestro id de boton para asi hacer un evento al dar click
var boton=document.getElementById("boton");

boton.addEventListener('click',codigo);

function codigo(){

    var caja=document.getElementById("link").value;
    //Creamos una expresion regular para obtener el codigo
    var expresion=new RegExp("[a-z]..-[a-z]...-[a-z]..")
    //la variable codigo es un array donde se almacena lo extraido por la expresion regular
    var codigo=expresion.exec(caja);
    var codigoConGiones=codigo[0];
    //El array anterior se almacena en un string y despues separarlo en caracteres en un array
    var array=codigoConGiones.split('');
    //un auxiliar para mi codigo sin giones
    var palabra="";
    //en el for si hay un guion en el recorrido se lo remplaza con espacio, sin embargo encuentra 
    //alguna letra de a-z se concatena a la variable palabra
    for(var i=0;i<array.length;i++){
        if(array[i]=='-'){
            palabra+=" ";
        }
        else{
            palabra+=array[i];
        }
    }
    //Rempla al h2 para poner el codigo sin guiones
    document.getElementById("codigo").innerHTML=palabra;



    console.log(codigoConGiones);



/**
 * 
 */

}






















/*
        var expresion=new RegExp("[a-z]..-[a-z]...-[a-z]..")
        console.log(expresion.test(a));
        console.log(expresion.exec(a));
        var arr=expresion.exec(a);
        console.log(arr[0])

*/
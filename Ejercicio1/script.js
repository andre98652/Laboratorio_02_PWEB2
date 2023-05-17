const d=new Date();
var dia=d.getDay();

//const dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]

//const p=document.getElementById("demo")

console.log(dia)
var day=dias()
document.getElementById("dia").innerHTML=day


function dias(){
    if(dia==0){
        return "Domingo"
    }
    else if(dia==1){
        return "Lunes"
    }
    else if(dia==2){
        return "Martes"
    }
    else if(dia==3){
        return "Miercoles"
    }
    else if(dia==4){
        return "Jueves"
    }
    else if(dia==5){
        return "Viernes"
    }
    else if(dia==6){
        return "Sabado"
    }
}


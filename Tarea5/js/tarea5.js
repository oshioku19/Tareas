function CalcularSueldo(horas=0,años=0,categoria="") {
    let bono = 0;
    let tarifa = 0;
    let sueldobasico = 0;
    let bonificacion = 0;
    let sueldoneto = 0;
    switch (categoria) {
        case "A":
            tarifa=40;
            break;
        case "B":
            tarifa=35;
            break;
        case "C":
            tarifa=30;
            break;    
        default:
            break;
    }

    if(años<=3){
        bono= 0.15;
    }
    else if( (años<=7) &&(años>3) ){
        bono=0.2;
    }
    else if((años<=12) &&(años>7) ){
        bono=0.3;
    }
    else{
        bono=0.35;
    }

    sueldobasico = horas*tarifa;
    bonificacion = sueldobasico*bono;
    sueldoneto= sueldobasico+bonificacion;

    return mensaje = `El sueldo basico es de S/${sueldobasico},la bonificacion es S/${bonificacion} y  el sueldo neto es S/${sueldoneto} `;
}
 const btn = document.getElementById("btn");
 btn.onclick = function(){
    const horasTrabajadas = document.getElementById("horastrabajadas");
    const añosServicio =  document.getElementById("añosservicio");
    const txtCategoria =  document.getElementById("txtcategoria");
    const resultado =  document.getElementById("resultado");

    resultado.innerText = CalcularSueldo(horasTrabajadas.value,añosServicio.value,txtCategoria.value);
 }

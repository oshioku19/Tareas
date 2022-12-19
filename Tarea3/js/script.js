const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.onclick = function(){

    alert("holis bonis crayolis");

    const hora = document.getElementById("hora");
    const tarifa = document.getElementById("tarifa");
    const total = document.getElementById("total");

    let cantidadHora = hora.value;
    let cantidadTarifa = tarifa.value;


     if(hora>40)
    { 
        total= 40*tarifa + (hora-40)*tarifa+(tarifa*0.5);
    }
    else
    {
        total=hora*tarifa;
    }
    //Salida
    alert("El total a pagar es"+total);
}





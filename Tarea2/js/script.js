//Declarando variables

const btnComprar = document.getElementById("btnComprar");


btnComprar.onclick = function(){
const monopolio = document.getElementById("monopolio");
const ajedrez = document.getElementById("ajedrez");
const lego = document.getElementById("lego");
const damas = document.getElementById("damas");
const laberinto = document.getElementById("monopolio");
const resultado = document.getElementById("resultado");

let cantidadMonopolio =  monopolio.value;
let cantidadAjedrez = ajedrez.value;
let cantidadLego = lego.value;
let cantidadDamas = damas.value;
let cantidadLaberinto = laberinto.value;



let precioMonopolio = 70.99;
let precioAjedrez = 78.99;
let precioLego = 100.99;
let precioDamas = 58.50;
let precioLaberinto = 35.00;
//total de juguetes comprados 
let totaljuguetes = cantidadAjedrez + cantidadMonopolio + cantidadLaberinto + cantidadLego +cantidadDamas;

let costo = (cantidadMonopolio * precioMonopolio) + (cantidadAjedrez * precioAjedrez) + (cantidadLego * precioLego) + (cantidadDamas * precioDamas) + (cantidadLaberinto * precioLaberinto);

    let descuento=0;
    let importe=0;
    if (totaljuguetes < 10){
        descuento = costo * 0.035;   
        importe = costo - descuento;
       
        
    }
    else if((totaljuguetes >= 10)&&(totaljuguetes<=20)){
        descuento = costo * 0.07;   
        importe = costo - descuento;
        
    }
    else{
        descuento = costo * 0.095;   
        importe = costo - descuento;
  
        
    }
    alert("El total a pagar es"+importe);
}

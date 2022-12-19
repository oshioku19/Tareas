//Caso1
const btnvalidar1 = document.getElementById("btnvalidar1");
const numero = document.getElementById("numero");
const resultado1 = document.getElementById("resultado1");
    function numeroCifras(num) {
        cifra1=num[0];
        cifra2=num[1];
        cifra3=num[2];
        ncifra1=parseInt(cifra1);
        ncifra2=parseInt(cifra2);
        ncifra3=parseInt(cifra3);
        resultado=0;
    
        if((ncifra1==ncifra2) &&   (ncifra1==ncifra3)   ){
          resultado= (Math.sqrt(ncifra1) +Math.sqrt(ncifra2) + Math.sqrt(ncifra3) )
        }
        else{
            resultado= (Math.pow(ncifra1, 2) + Math.pow(ncifra2,2) + Math.pow(ncifra3,2) )
        }
        return resultado;
    }
btnvalidar1.onclick = function(){
    resultado1.innerText= numeroCifras(numero.value);
}    
//Caso2
const check = document.getElementById("check");
function validarContraseña(contra="") {
    let expRegminuscula=/[a-z]/g;
    let expRegmayuscula=/["A-Z"]/g;
    let expRegnumeros=/[0-9]/g;
    let arroba=contra.indexOf("@");
    let guion=contra.indexOf("_");
    let cantminusculas = contra.match(expRegminuscula);
    let cantmayusculas = contra.match(expRegmayuscula);
    let cantnumeros = contra.match(expRegnumeros);
    let cantcaracteres = contra.length;
    
    if((arroba>=0 || guion>=0) &&  (cantminusculas!="") && (cantmayusculas!="")  && (cantnumeros!="" ) && (cantcaracteres>=10) )
    { mensaje="Contraseña valida"}
    else
    {
        mensaje = "Contraseña invalida"
    }
    return mensaje;
}

const btnvalidar2 = document.getElementById("btnvalidar2");
btnvalidar2.onclick = function(){
    const  contraseña = document.getElementById("contraseña");
    const resultado2 = document.getElementById("resultado2");
    contras =contraseña.value;
    if(validarContraseña(contras)=="Contraseña valida")
    {   resultado2.setAttribute("class","text-success");
        resultado2.innerText= validarContraseña(contras);}
    else{
        resultado2.setAttribute("class","text-danger");
        resultado2.innerText= validarContraseña(contras);
    }

    

}
check.onclick=function(){
    const  contraseña = document.getElementById("contraseña");
    if(contraseña.getAttribute("type")=="password"){
        contraseña.setAttribute("type","text");
    }
    else{
        contraseña.setAttribute("type","password");
    }
}

//Caso 3

function validarCorreo(correo="") {
    correodominio = correo.split("@")[1];
    correonombre =  correo.split("@")[0];
    
    if((correodominio=="certus.edu.pe")&& (correonombre.indexOf(" ")==-1)){
        mensaje="El correo es valido"
    }
    else{
        mensaje="El correo no es valido"
    }
    return mensaje;
}

const btnvalidar = document.getElementById("btnvalidar");

btnvalidar.onclick = function(){
    const  email = document.getElementById("email");
    const resultado = document.getElementById("resultado");
    eMail=email.value;
    resultado.innerText= validarCorreo(eMail);
}


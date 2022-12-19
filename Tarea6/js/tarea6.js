
function validarContraseña(contra="",contra2=""){
    let mensaje="";
    if(contra!=contra2){
        mensaje = "Ambas contraseñas deben ser iguales";
    }
    return mensaje;
}
function validarUsuario(usuario=""){
    const regexp = /^[a-z0-9_-]{4,16}$/;
    let mensaje="";
    if(regexp.test(usuario) ){
       mensaje="";
    }
    else{
        mensaje= "El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros,letras y guion bajo";
    }
    return mensaje;
   
}
    const contra1= document.getElementById("contraseña1");
    const contra2 = document.getElementById("contraseña2");
    const mensajeContraseña = document.getElementById("mensajecontraseña");
    const mensajeUsuario = document.getElementById("mensajeusuario");
    const btnenviar = document.getElementById("btnenviar");
    const txtusuario = document.getElementById("txtusuario");
    const formulario = document.getElementById("formulario");
    const txtnombre = document.getElementById("txtnombre");
    
    btnenviar.onclick = function(){
        
        mensajeContraseña.innerText=validarContraseña(contra1.value,contra2.value);
        mensajeContraseña.setAttribute("class","text-danger");
        mensajeUsuario.innerText=validarUsuario(txtusuario.value);
        mensajeUsuario.setAttribute("class","text-danger");

        if((mensajeContraseña.textContent=="Ambas contraseñas deben ser iguales") ||((contra1.value=="") ||(contra2.value=="")  )){
          contra1.setAttribute("class"," inputtext error border border-2 border-danger");
          contra2.setAttribute("class"," inputtext error border border-2 border-danger");
        }
        else{
          contra1.setAttribute("class","inputtext");
          contra2.setAttribute("class","inputtext");
        }
        if(mensajeUsuario.textContent=="El usuario tiene que ser de 4 a 16 digitos y solo puede contener numeros,letras y guion bajo"){
          txtusuario.setAttribute("class","inputtext error border border-2 border-danger");
        }
        else{
          txtusuario.setAttribute("class","inputtext");
        }
        if(txtnombre.value=="")
        {txtnombre.setAttribute("class","inputtext error border border-2 border-danger");}
        else{txtnombre.setAttribute("class","inputtext");}
    }

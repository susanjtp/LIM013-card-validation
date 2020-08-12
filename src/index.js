import validator from "./validator.js"

//click funcion al boton validar
document.getElementById('btn-validar').addEventListener('click',function(){
    //llamo a la caja de tarjeta de credito del html
    let numero =document.getElementById('inputNumero').value;
    //llamo al validador isvalid de validator.js 
    let resultado=validator.isValid(numero);
    //ocultar
    let numeroOculto =validator.maskify(numero);
    if(resultado==true){
      document.getElementById('resultado').innerHTML+= numeroOculto + " "+ "es válida";
    } else{
      document.getElementById('resultado').innerHTML+= numeroOculto + " "+ "es inválida";
    }
  });



//boton para que se muestre la plataforma de pagos

/*document.getElementById("send").addEventListener("click", ()=>{
    document.getElementById("uno").style.display= "none";
    document.getElementById("formulario-tarjeta").style.display = "block";
})*/

/*document.getElementById("btn-validar").addEventListener("click", ()=>{
    event.preventDefault()
    let card = document.getElementById("inputNumero").value;
    let cardvalid = validator.isValid(card);
    validator.maskify(card)
})*/

//input numero de tarjeta
//formulario.inputnumero.addEventListener('keyup'), (e) =>{
    //console.log(e)
//aqui termina mi codigo valido 

   /* let valorInput = e.target.value;
    formulario.inputnumero = valorInput.replace(/\s/g,'')
    .replace(/\D/g,'')
    .replace(/([0-9]{4})/g,'$1 ');
    */

//}
//-------------------------------------------------------------


//validacion de caja de texto: solo numeros
/*const botonPago = document.getElementById('pago'),
    botonSaludo = document.getElementById('saludo'),
    seccion1 = document.getElementById('seccion1'),
    seccion2 = document.getElementById('seccion2');
  
console.log('tarjeta',seccion1);
*/
/*
seccion2.classList.add('hide');

*/
/*seccion1.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value

    seccion1.inputNumero.value = valorInput
*/

    //Eliminando espacios en blanco
   // .replace(/\s/g, '')

    //reemplaza las letras
    //.replace(/\D/g, '')

    //valorInput.replace()
    /*console.log('valor', valorInput)

})
*/
/*function soloNumeros(e) {
    const  key=e.keyCode || e.which;
    teclado=String.fromCharCode(key);
    numeros="0123456789";
    especiales="8-37-38-46"; //array
    teclado_especial=false;

    for(var i in especiales) {
        if(key==especiales[i]){
         teclado_especial=true;
        }
         /*
     if(numeros.indeOf)(teclado)==-1 && !teclado_especial{
         return false;
    }
     
    }
    
} */ 
/*
window.onload = function() { 
debugger
document.getElementById("number").addEventListener("keyup", soloNumeros);
};

*/





/*
import validator from './validator.js';

console.log(validator);
*/
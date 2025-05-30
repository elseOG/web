//container = document.getElementById("container");

numberOne = document.getElementById("numero1");
numberTwo= document.getElementById("numero2");
result = document.getElementById("resultado");
botonSumar = document.getElementById("sumar");
botonSumar.disabled = true;


function sumar(){
    result.value = parseFloat(numberOne.value)+parseFloat(numberTwo.value);
}
       
   
//evento de escucha - listener
botonSumar.addEventListener("click",sumar);

numberOne.addEventListener("input",validar);
numberTwo.addEventListener("input",validar);
  
function validar(){
    if(numberOne.value.trim() != "" && numberTwo.value.trim() != "" ){
        botonSumar.disabled = false; 
    }else{  
        botonSumar.disabled = true;
    }  
}



















/*const numberOne = document.getElementById("numero1");
const numberTwo= document.getElementById("numero2");
const result= document.getElementById("resultado");
const botonSumar = document.getElementById("sumar");
//botonSumar.disabled= true;
    
//suma de calores
function sumar(){
    result.value = parseFloat(numberOne.value)+parseFloat(numberTwo.value);
}  

/////////  funciona para verificar campos

function verificaCampos(){
    if(numberOne.value !== '' && numberTwo.value !== '')
    {
        botonSumar.style.display='inline';
    }else{
        botonSumar.style.display='none';
    }            
}           
    
//////    evento de escucha para cada campo
numberOne.addEventListener('input',verificaCampos)
numberTwo.addEventListener('input',verificaCampos)  
//funcion para 

//evento de escucha - listener
document.getElementById("sumar").addEventListener("click, sumar");



//cuando se escribo es input

*/
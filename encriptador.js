
var newtext=[""];
var newtext2=[""];
var boton_Encriptar=document.getElementById(encriptar);
const boton_Desencriptar=document.getElementById(desencriptar);
var salida_Texto = document.getElementById("texto_encriptado");
let imagen_muñeco=document.getElementById("muñeco");
let no_encontrado=document.getElementById("no-encontrado");
let ingresa_mensaje=document.getElementById("ingresa-mensaje");
let texto= document.getElementById('Entrada-texto');
var desencriptado=document.getElementById('Entrada-texto');
var copia=document.getElementById("copiar");




function encriptar(){

  acentos();

texto= document.getElementById('Entrada-texto').value;  
/*console.log(typeof texto);*/ 
let textocifrado="";
salida_Texto.innerHTML='';
let largo=texto.length;
console.log(texto.length);

if (texto.length==0){
      /*alert("Escribe un texto por favor");*/
      salida_Texto.style.display = 'none';
      imagen_muñeco.style.display = 'block';
      ingresa_mensaje.style.display = 'block';
      no_encontrado.style.display = 'block';
      copia.style.display = 'none';
      Texto_encriptado="";


}else{

      if(texto.includes("imes") || texto.includes("ai") || texto.includes("enter") || texto.includes("ufat")|| texto.includes("ober")){
        salida_Texto.style.display = 'block';
        imagen_muñeco.style.display = 'none';
        ingresa_mensaje.style.display = 'none';
        no_encontrado.style.display = 'none';
        no_encontrado.style.display = 'none';
        alert("tu texto esta encriptado por favor presiona desencriptar");

    }else{

      /*Contador*/
              imagen_muñeco.style.display = 'none';
              ingresa_mensaje.style.display = 'none';
              no_encontrado.style.display = 'none';
              salida_Texto.style.display = 'block';
              copia.style.display = 'block';
            
            var atexto = texto.split("");
            console.log(atexto[0]);
            console.log(atexto[1]);
            console.log(atexto[2]);
            console.log(atexto[3]);

            console.log(atexto[0] == 'a');

              for(var c = 0; c < largo; c++){
                
                  if (atexto[c]=='a'){
                    newtext.push('ai');
                  }else if(atexto[c]=='e'){
                    newtext.push('enter');
                  }else if(atexto[c]=='i'){          
                    newtext.push('imes');
                  } else if(atexto[c]=='o'){
                    newtext.push('ober');
                  }else if(atexto[c]=='u'){
                    nnewtext.push('ufat');
                  } else{
                    newtext[c]=atexto[c];
                  }
                
              }

              
              console.log("1");  
              console.log(newtext);  
              Texto_encriptado=newtext.join('');
              console.log("2");  
              console.log(Texto_encriptado);
            }
          }
          salida_Texto.innerHTML=Texto_encriptado;
          newtext=[];
          return Texto_encriptado;
    }

    function acentos() {

texto= document.getElementById('Entrada-texto').value;  
if(texto.includes("í") || texto.includes("á") || texto.includes("é") || texto.includes("ó")|| texto.includes("ú")){

  alert("no se puee encriptar");
}else{
return texto;
}

  }

function desencriptar(){
acentos();
  texto= document.getElementById('Entrada-texto').value;  
  if(texto.length == 0 || salida_Texto.length == 0 ){
    salida_Texto.style.display = 'none';
    imagen_muñeco.style.display = 'block';
    ingresa_mensaje.style.display = 'block';
    no_encontrado.style.display = 'block';
    copia.style.display = 'none';

  } else{
        
  console.log(texto);
  salida_Texto.style.display = 'block';
    imagen_muñeco.style.display = 'none';
    ingresa_mensaje.style.display = 'none';
    no_encontrado.style.display = 'none';
    copia.style.display = 'block';
        var Texto_desencriptado=texto
                                  .replaceAll('ai','a')
                                  .replaceAll('enter','e')
                                  .replaceAll('imes','i')
                                  .replaceAll('ober','o')
                                  .replaceAll('ufat','u');
          console.log(Texto_desencriptado);
          salida_Texto.innerHTML=Texto_desencriptado;
        }
        return Texto_desencriptado;
 }
      
  
    


 function copiar() {

copia=document.getElementById("texto_encriptado").value; 
document.getElementById("texto_encriptado").select()
document.execCommand("copy");
console.log("copiado");
 }




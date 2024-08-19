
function encriptarTexto(){
    let listaPalabrasEncriptadas=[];
    let textoInput= document.getElementById("textoUsuario").value;
    console.log(textoInput);
    let palabras= textoInput.split(' ');
    console.log(palabras);
    for(let i=0;i<palabras.length;i++){
        let palabraNueva="";
        let palabraAhora= palabras[i];
        console.log(palabraAhora);
        for(let j=0;j<palabraAhora.length;j++){
            
            let letra = palabraAhora[j];
            console.log(letra);
            switch (letra){
                case "a":
                    palabraNueva=palabraNueva+"ai"; 
                    break;
                case "e":
                    palabraNueva=palabraNueva+"enter";
                    break;
                case "i":
                    palabraNueva=palabraNueva+"imes";
                    break;
                
                case "o":
                    palabraNueva=palabraNueva+"ober";
                    break;
                case "u":
                    palabraNueva=palabraNueva+"ufat";
                    break;
                default:
                    palabraNueva=palabraNueva+letra;
                    break
                
            }
            console.log(`iteracion ${j}`);
        }
        console.log(palabraNueva);
        listaPalabrasEncriptadas.push(palabraNueva);
        console.log(listaPalabrasEncriptadas);
    }
    let nuevaCadena=""
    for(i=0;i<listaPalabrasEncriptadas.length;i++){
        nuevaCadena= nuevaCadena+" "+listaPalabrasEncriptadas[i];
    }
    console.log(nuevaCadena);
    document.getElementById("textoUsuario").value="";
    visualizador(nuevaCadena);
   

}

function desencriptarTexto(){
    let listaPalabrasDesencriptadas=[];
    let textoInput= document.getElementById("textoUsuario").value;
    let palabras=textoInput.split(' ');
    for(let i=0;i<palabras.length;i++){
        let palabraNueva="";
        let palabraAhora= palabras[i]; 
        let j=0;
        while(j<palabraAhora.length){
            console.log(j);
            let letra= palabraAhora[j];
            console.log(palabraAhora[j]);
            switch (letra){
                case "a":
                    palabraNueva=palabraNueva+letra;
                    j+=1;
                    break;
                case "e":
                    palabraNueva=palabraNueva+letra;
                    j+=4;
                     break;
                case "i":
                    palabraNueva=palabraNueva+letra;
                    j+=3;
                    break;
                
                case "o":
                    palabraNueva=palabraNueva+letra;
                    j+=3;
                    break;
                case "u":
                    palabraNueva=palabraNueva+letra;
                    j+=3;
                    break;
                default:
                    palabraNueva=palabraNueva+letra;
                    break;
            }
            console.log(palabraNueva);
            j++;
        }
        console.log(palabraNueva);
        listaPalabrasDesencriptadas.push(palabraNueva);
    }
    let nuevaCadena=""
    for(i=0;i<listaPalabrasDesencriptadas.length;i++){
        nuevaCadena= nuevaCadena+" "+listaPalabrasDesencriptadas[i];
    }
    console.log(nuevaCadena);
    visualizador2(nuevaCadena);

}

function visualizador(cadena){
    console.log(`la cadena es ${cadena} ...`)
    document.getElementById("status__bar").textContent="";
    document.getElementById("imagen__lupa").setAttribute("src","assets/encriptado.png")
    document.getElementById("texto").textContent="Mensaje encriptado";
    document.getElementById("texto2").textContent= cadena;
    document.getElementById("copiar").style.visibility="visible";


}
function visualizador2(cadena){
    console.log(`la cadena es ${cadena} ...`)
    document.getElementById("status__bar").textContent="";
    document.getElementById("imagen__lupa").setAttribute("src","assets/desencriptado.png")
    document.getElementById("texto").textContent="Mensaje desencriptado";
    document.getElementById("texto2").textContent= cadena;
    document.getElementById("copiar").style.visibility="visible";

}

function copiar(){

    let textoCopiado= document.getElementById("texto2");
    let rango=document.createRange();

   
    rango.selectNodeContents(textoCopiado);

    
    const seleccion = window.getSelection();
    seleccion.removeAllRanges();

    seleccion.addRange(rango);
    try{
        let copiaExitosa = document.execCommand('copy');
        document.getElementById("status__bar").textContent="Texto copiado al portapapeles";
        setTimeout(function() { document.getElementById("status__bar").textContent=""; },3000);

    } catch (err){
        alert('No se pudo copiar'+err.message)

    }
    
    // window.getSelection().removeAllRanges();
}
function campoInicial(){
    document.getElementById("textoUsuario").value="inserta tu texto aqui";
    document.getElementById("copiar").style.visibility=hidden;
 }


campoInicial();


 
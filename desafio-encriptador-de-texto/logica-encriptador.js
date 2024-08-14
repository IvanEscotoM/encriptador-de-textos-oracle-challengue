
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
    visualizador(nuevaCadena);

}

function visualizador(cadena){
    console.log(`la cadena es ${cadena} ...`)
    document.getElementById("imagen__lupa").hidden=true;
    document.getElementById("texto").hidden=true;
    document.getElementById("texto2").textContent= cadena;
    document.getElementById("copiar").style.visibility="visible";


}

function copiar(){

    let textoCopiado= document.getElementById("texto2");
    let rango=document.createRange();
    rango.selectNode(textoCopiado);
    window.getSelection().removeAllRanges;
    window.getSelection().addRange(rango);
    try{
        let copiaExitosa = document.execCommand('copy');
        

    } catch (err){
        alert('No se pudo copiar'+err.message)

    }
    window.getSelection().removeAllRanges();
}
function campoInicial(){
    document.getElementById("textoUsuario").value="inserta tu texto aqui";
    document.getElementById("copiar").style.visibility="hidden";
 }


campoInicial();


 
let tituloMensaje = document.getElementById("titulo-mensaje");
let parrafo = document.getElementById("parrafo");
let imagen = document.getElementById("muñeco");
let btnCopy = document.getElementById("copy");

function Encriptar(){
    let text = document.getElementById("entrada").value;
    let textSalida = document.getElementById("textSalida");

    let textCodificado = text
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/gi,"ufat");

    if (text.length != 0) {
        ocultarCont();
        MostrarBtn();
        textSalida.textContent = textCodificado;
    }else{
        swal ( "Oops" ,  "Ingrese texto porfavor!" ,  "error" );
    }
    document.getElementById("entrada").value = "";
}

function Desencriptar(){
    let textCodificado = document.getElementById("entrada").value;
    let textSalida = document.getElementById("textSalida");

    let text = textCodificado
    .replace(/enter/gi,"e")
    .replace(/imes/gi,"i")
    .replace(/ai/gi,"a")
    .replace(/ober/gi,"o")
    .replace(/ufat/gi,"u");

    if (textCodificado.length != 0) {
        textSalida.textContent = text;
    }else{
        swal ( "Oops" ,  "Something went wrong!" ,  "error" );
    }
}

function CopiarText(){
    let textSalida = document.getElementById("textSalida").innerHTML;
    navigator.clipboard.writeText(textSalida);
    swal("Se copio al portapapeles!", "", "success");
    document.getElementById("textSalida").innerHTML="";
}

function ocultarCont(){
    tituloMensaje.classList.add("ocultar");
    parrafo.classList.add("ocultar");
    imagen.classList.add("ocultar");
}

function MostrarBtn(){
    btnCopy.classList.add("mostrar");
}
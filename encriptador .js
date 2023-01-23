// function encriptar() {
//     var mensaje = 'gato';
//     var arregloEncriptar = mensaje.split('');

//     for (var i = 0; i < arregloEncriptar.length; i++) {

//         if (arregloEncriptar[i] == "a") {
//             arregloEncriptar[i] = "ai";
//         }
//         else if (arregloEncriptar[i] == "e") {
//             arregloEncriptar[i] = "enter"
//         }
//         else if (arregloEncriptar[i] == "i") {
//             arregloEncriptar[i] = "imes"
//         }
//         else if (arregloEncriptar[i] == "o") {
//             arregloEncriptar[i] = "ober"
//         }
//         else if (arregloEncriptar[i] == "u") {
//             arregloEncriptar[i] = "ufat"
//         }
//     }
//     var nuevo
//     nuevo = arregloEncriptar.join("");
//     alert(nuevo);
// }

// var btnencriptar = document.getElementById("btn-encriptar");
// btnencriptar.addEventListener("click",encriptar);

const texarea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar() {
    const textoEncriptado = encriptar(texarea.value)
    mensaje.value = textoEncriptado;
    texarea.value = "";
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptar) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase()

    for (let i = 0; i < matrizcodigo.length; i++) {
        if (stringEncriptar.includes(matrizcodigo[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
        }
    }
    return stringEncriptar
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(texarea.value)
    mensaje.value = textoEncriptado;
    texarea.value = "";
    
}

function desencriptar(stringDesencriptado) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizcodigo.length; i++) {
        if (stringDesencriptado.includes(matrizcodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
        }
    }
    return stringDesencriptado
}

function copiar(){
    const contenido = document.querySelector(".mensaje");
    contenido.select();
    document.execCommand("copy");
}

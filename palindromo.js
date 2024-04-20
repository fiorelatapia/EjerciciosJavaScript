let palabra=prompt("Ingrese una palabra o frase:")
let palabraInvertida = palabra.split('').reverse().join('');

if (palabra==palabraInvertida){
    console.log("Es palíndroma")
} else{
    console.log("No es palíndroma")
}

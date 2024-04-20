let velocidad= parseFloat(prompt("Ingrese la velocidad en km/h:"));
let distancia= parseFloat(prompt("Ingrese la distancia en km:"));
let tiempo=distancia/velocidad; 
console.log(`El tiempo que toma recorrer ${distancia}km a ${velocidad}km/h es de ${tiempo} horas`);

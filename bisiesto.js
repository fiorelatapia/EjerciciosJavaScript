let año=parseInt(prompt("Ingrese un año:"));
if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0){
    console.log("Es un año bisiesto");
}else{
    console.log("No es un año bisiesto");
}



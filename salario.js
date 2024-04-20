let salario=parseFloat(prompt("Ingrese su salario"));
if (salario<= 15000){
    let incremento= salario*20/100;
    salario+= incremento;
    console.log(`El incremento de su salario es ${incremento} haciendo un total de ${salario}`);
} else{
    let incremento=salario*15/100;
    salario+=incremento;
    console.log(`El incremento de su salario es ${incremento} haciendo un total de ${salario}`)
}

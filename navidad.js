function calculoDias (fechaDeseada){
    fechaDeseada= new Date(fechaDeseada); 
    let fechaActual= new Date();
    let diferencia = fechaDeseada - fechaActual;
    const miliseg=1000*60*60*24;
    let calculo= diferencia/miliseg;
    return Math.floor(calculo+1);
}

calculoDias("2024-12-25");

calculoDias("2024-11-2");

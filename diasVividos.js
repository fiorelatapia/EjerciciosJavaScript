function diasVividos(fechaNacimiento){
    let fechaActual= new Date();
    fechaNacimiento= new Date(fechaNacimiento);
    const miliseg= 1000*60*60*24;
    let diferencia= fechaActual-fechaNacimiento;
    let calculo= Math.floor(diferencia/miliseg);
    return calculo;
}

diasVividos("2004-9-19");
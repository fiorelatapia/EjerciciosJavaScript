var num=prompt("Ingrese un número: ")
num= parseInt(num);
var total=1;
for (var i=1; i<num+1;i++){
    
    total*=i;
}
console.log (`El valor factorial de ${num} es ${total}`)

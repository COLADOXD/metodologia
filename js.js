// 1. Mostrar la suma elementos impares

let odd = [1, 4, 3,6]
let oddCount = 0;

for(let i = 0 ; i < odd.length; i++){
    if(odd[i] % 2 != 0){
        oddCount = oddCount + odd[i];
    }
}
console.log(oddCount)

// 2. Mostrar suma índices pares

let by = [2, 4, 3,6]
let byCount = 0;

for(let i = 0 ; i < by.length; i++){
    if(i % 2 === 0){
        byCount = byCount + by[i];
    }
}
console.log(byCount);

// 3. Mostrar la suma elementos mayores a 10

let mayor = [3,5,30,10];
let mayorCount = 0;

for(let i = 0; i < mayor.length; i++){
    if(mayor[i]> 10){
        mayorCount = mayorCount + mayor[i];
    }
}
console.log(mayorCount)

// 4. Mostrar la suma de los índices donde el elemento es 0

let zeroArr = [2,4,0,1,0]
let zeroCount = 0;

for(let i = 0; i < zeroArr.length; i++){
    if(zeroArr[i] === 0){
        zeroCount = zeroCount + i;
    }
}
console.log(zeroCount)

// 5. Mostrar la suma elementos múltiplos de 3

let threeArr = [3,5,9,8]
let threeCount = 0;

for(let i = 0; i < threeArr.length; i++){
    if(threeArr[i] % 3 === 0){
        threeCount = threeCount + threeArr[i];
    }
}

console.log(threeCount)

// 6. Mostrar la suma elementos que no sean múltiplos de 7

let sevenArr = [7,14,2,3];
let sevenCount = 0;

for(let i = 0; i < sevenArr.length; i++){
    if(sevenArr[i] % 7 != 0){
        sevenCount = sevenCount + sevenArr[i];
    }
}

console.log(sevenCount)

// 7. Mostrar la suma de los elementos donde y el índice sean iguales

let equal = [2,1,4,3];
let equalCount = 0;

for(let i = 0; i < equal.length; i++){
    if(equal[i] === i){
        equalCount = equalCount + equal[i];
    }
}
console.log(equalCount);

// 8. Mostrar la suma de los elementos donde el índice sea mayor al elemento
let elmentM = [0,2,1,1];
let elementCount = 0;

for(let i = 0; i < elmentM.length; i++){
    if(elmentM[i] < i){
        elementCount = elementCount + elmentM[i];
    }
}
console.log(elementCount);

// 9. Mostrar la suma de los índices donde el índice sea menor al elemento
let menorArr =[0,2,1,4];
let menorCount = 0;

for(let i = 0; i < menorArr.length; i++){
    if( i < menorArr[i]){
        menorCount = menorCount + i;
    }
}
console.log(menorCount);

// Adicionalmente resolver un programa que emule el funcionamiento de un cajero automatico utilizando DO-WHILE en javascript (investigar).

let saldo = 1000;
let opcion;

do {
    opcion = parseInt(prompt("Seleccione una opción: \n1. Consultar saldo \n2. Retirar efectivo \n3. Depositar efectivo \n4. Salir"));
    switch (opcion) {
        case 1:
            alert("Su saldo es de $" + saldo);
            break;
        case 2:
            let retiro = parseInt(prompt("¿Cuánto desea retirar?"));
            if (retiro > saldo) {
                alert("Saldo insuficiente");
            } else {
                saldo -= retiro;
                alert("Retiró $" + retiro + ", su nuevo saldo es de $" + saldo);
            }
            break;
        case 3:
            let deposito = parseInt(prompt("¿Cuánto desea depositar?"));
            saldo += deposito;
            alert("Depositó $" + deposito + ", su nuevo saldo es de $" + saldo);
            break;
        case 4:
            alert("Gracias por usar nuestro cajero automático.");
            break;
        default:
            alert("Opción inválida");
    }
} while (opcion !== 4);
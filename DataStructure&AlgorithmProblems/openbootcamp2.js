const numeroIf = -865;
let numeroWhile = -1;
let numeroFor = 0;
const estacion = "otoño";

if(numeroIf > 0) {
    console.log(`El número ${numeroIf} es positivo`);
} else if (numeroIf < 0){
    console.log(`El número ${numeroIf} es negativo`);
} else  {
    console.log(`El número ${numeroIf} es cero`);
}

while(numeroWhile < 3) {
    console.log(`El valor de numeroWhile es ${numeroWhile}.`);
    numeroWhile++;
}

do {
    console.log(`${numeroWhile}`)
} while(numeroWhile < 0);

for(numeroFor; numeroFor <= 3; numeroFor++) {
    console.log(`numeroFor es ${numeroFor}`);
}

switch(estacion) {
    case "verano":
        console.log("Estamos en verano.");
        break;
    case "otoño":
        console.log("Estamos en otoño.");
        break;
    case "invierno":
        console.log("Estamos en invierno.");
        break;
    case "primavera":
        console.log("Estamos en primavera.");
        break;
    default:
        console.log("El valor de la variable estación es inválido.");
}
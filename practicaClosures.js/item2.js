/* 
    Calcular la ganancia de una casa de comidas 
creando una funcion donde se calcule y se muestre como resultado la misma
*/
const precio = 1000;
const entrega = 150;

function calcGanancia(precio, entrega) {
    function mostrarGanancia() {
        return precio - entrega;
    }

    return mostrarGanancia();
}

function show() {
    let result = calcGanancia(precio, entrega);
    return result;
}

console.log(show());
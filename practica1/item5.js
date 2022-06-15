function sumar(a, b) {
    return a + b;
}

console.log(sumar(10,2));
console.log();

// SI vamos a asignar restar a una variable, deberíamos colocarla aquí
console.log(restar(5, 2));

var restar = function(a, b) {
    return a - b;
}

// Este script hace 3 logs, el primero llama a la funcion sumar y devuelve 12 (la suma de los dos valores pasados por parametros)
// El segundo log no devuelve nada
// El tercer log devuelve error, ya que la función está asignada a una variable
// Si la funcion no estuviese asignada a una variable, devolvería 3, y esto es posible debido a que el Hoisting nos permite llamar funciones antes de declararlas dado el funcionamiento del callstack
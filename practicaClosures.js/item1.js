/*Un closure es un tipo especial de objeto que combina dos cosas: una función, y el entorno en que se creó esa función.*/

const init = () => {
    let name = 'Joaquin';
    function saludar() {
        // accede al name de la función init por ser una funcion interna a esta
        console.log(`Hola ${name}`);
    }
    return saludar;
}

let call = init();

call();
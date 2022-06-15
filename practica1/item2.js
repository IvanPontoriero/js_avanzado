let myName = 'Joaquin';

let myAge = 20;

const info = (name, age) => {
    return `Hola soy ${name} y tengo ${age} años.`
}

const out = info(myName, myAge);

console.log(out);   // Expect Hola soy Joaquin y tengo 20 años.
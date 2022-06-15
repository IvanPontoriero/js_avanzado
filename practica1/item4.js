const languages = ['Español', 'Chino', 'Portugues'];

const pickLan = (nombre) => {
    switch(nombre) {
        case 'Español':
            return 'Hola'
        case 'Chino':
            return 'Chao'
        case 'Portugues':
            return 'Ola'
        default:
            return 'Error, ingrese un idioma válido'    
    }
}

const choice0 = pickLan(languages[0]);
const choice1 = pickLan(languages[1]);
const choice2 = pickLan(languages[2]);
const choice3 = pickLan(languages[3]);

// Testing de todos los casos por consola
console.log(choice0);
console.log(choice1);
console.log(choice2);
console.log(choice3);

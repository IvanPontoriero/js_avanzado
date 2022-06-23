// Parte 1

const threeSum = (a, b, c) => {
    return a + b +c;
}

const result = threeSum(23, 42, 11);

console.log(result);

// Parte 2

class Coche {
    constructor(puertas) {
        this.puertas = puertas
    }

    incPuertas() {
        return this.puertas++;
    }
}

const miCoche = new Coche(3);

console.log(miCoche.puertas);
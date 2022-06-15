const data = {
    basis: 2,
    exponent: 3
}

const cube = (basis, exp) => {
    let power = Math.pow(basis, exp);

    return power;
}

let result = cube(data.basis, data.exponent);

console.log(result);
function counter() {
    let acc = 0;

    function increment() {
        return acc++;
    }

    return increment;
}

const newCounter = counter();

console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

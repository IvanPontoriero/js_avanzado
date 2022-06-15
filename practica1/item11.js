const names = [
    {
        nombre: 'Joaco'
    },
    {
        nombre: 'Seba'
    },
    {
        nombre : 'Juan'
    },
    {
        nombre: 'Cristian'
    }
];

const showName = (arr) => {
    for(let name in arr) {
        console.log(arr[name]);
    }
}

showName(names);
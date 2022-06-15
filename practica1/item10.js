const array1 = [10, 21, 22, 2, 5];

const over20 = (arr) => {
    const arrOver20 = [];
    for(i = 0; i < arr.length; i++) {
        if(arr[i] > 20) {
            arrOver20.unshift(arr[i])
        }
    }

    return arrOver20;
}

const res = over20(array1);
console.log(res);
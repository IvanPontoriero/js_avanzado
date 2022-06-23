/*
    Given an array of integers 'nums' and an integer 'target',
    return indices of the two numbers such that they add up to target.
*/

const nums = [2, 7, 11, 15];

const target = 9;

const initialValue = 0;

// With reduce method
const twosum = (arr, int) => {
    let sum = 0;
    const indices = [];

    arr.reduce((acc, el) => {
        if(sum < int) {
            sum += el;
            indices.push(acc);
            acc++;
            return acc;
        }
    }, initialValue);
    
    return indices;
}

// "No JS Methods" way
function twoSum(arr, int) {
    let acc = 0;
    const indices = [];

    for(let i = 0; acc < int; i++) {
        acc += arr[i];
        indices.push(i);
    }

    return indices;
}

const result = twosum(nums, target);

console.log(result);
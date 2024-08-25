'use strict';

const array = [3, 2, -6, -1, 7];

let min = array => {
    let least = array[0];
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] !== 'number') continue;
        if(least < array[i]){
            continue;
        } else {
            least = array[i];
        }
    }
    console.log(least);
};

let max = array => {
    let least = array[0];
    for (let i = 0; i < array.length; i++){
        if (typeof array[i] !== 'number') continue;

        if(least > array[i]){
            continue;
        } else {
            least = array[i];
        }
    }
    console.log(least);
};
    
min(array);
max(array);
debugger;

const array1 = [2, 4, 6, 8];
const array2 = [3, 5, 7, 9];
const array3 = [...array2, ...array1];
console.log(array3);
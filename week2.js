// WHILE LOOP

let arr = 'dofijwe'
let x = 0;
while (x < 3 && arr.length > 5) {
    console.log(x)
    x = x + 1;
}

let x = 0;
while (x <= 7) {
    console.log(x);
    x = x + 1;
}


// break rompe los loops

let arr = [1,2,3,4,5,6,7];
for (let i=0; i<arr.length; i++) {
    if (arr[i] <  5){
        console.log(arr[i]);
        break;
    } 
}

// ARRAYS

// push()
let arr = [1, 23, 345, 4];
arr.push('jacob');
console.log(arr);

// slice(startiIndex, finishIndex)

let arr = [1, 23, 345, 4];
// arr.slice(1,3);
console.log(arr.slice(1,3));


// splice() -- investigar de tarea


// Funciones array

const sumOne = (n) => {
    return n + 1;
}

// su quivalente en notación tradicional es 
function sumOne(n) {
    return n + 1;
}


const square = (n) => {
    return n ** 2
}


const square = (n) => (n**2);

console.log(square(3));


// map()
let arr = [1,2,3,4,5];
let arr2 = arr.map(item => item**2);
console.log(arr2);


// forEach()
let arr = [1,2,3,4,5];
arr.forEach(item => console.log(item));



let arr = [1,2,3,4,5];
for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
}


// filter()

let arr = [1,2,34,33,23,11,20,7,6];

let arr2 = arr.filter(item => item > 10);

let arr3 = arr.filter(item => item % 2 === 0);

console.log(arr2);
console.log(arr3);



// EJERCICIO
// arrayPlusArray tiene de entrada dos arrays de numeros. Tu función tiene que regresar la suma de los elementos de arr1 
// más la suma de los elementos de arr2.

function arrayPlusArray(arr1, arr2) {
    
}


// concat() método de arrays

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

arr1.concat(arr2); // -> [1,2,3,4,5,6,7,8]
 
console.log(arr1.concat(arr2));

console.log(arr1 + arr2);

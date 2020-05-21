
// EJERCICIO 1
// Is the string uppercase?
// Task
// Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:
// Returns true or false

// example
"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true


function isUpperCase(str) {
    return str.toUpperCase() === str ? true : false;
}


// EJERCICIO 2
// arrayPlusArray tiene de entrada dos arrays de numeros. Tu función tiene que regresar la suma de los elementos de arr1 
// más la suma de los elementos de arr2.

function arrayPlusArray(arr1, arr2) {
    let count = 0;
    arr1.concat(arr2).forEach(item => count = count + item);
    return count;
}

let arr1 = [1,2,3];
let arr2 = [2,4,5];

console.log(arrayPlusArray(arr1, arr2));

// includes() metodo de arrays y strings

let arr = [1, 3, 4,'t', 5];
arr.includes(1) // -> true
arr.includes(7) // -> false

console.log(arr.includes(1))

let str = 'abcdepowef';
str.includes('c') // -> true
console.log(str.includes('cde'))


// EJERCICIO
// Construir el método includes para arrays con for loops

function isIncluded(arr, elem) {
    let arr2 = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === elem) {
            arr2.push(true);
        }  
    }
    if (arr2.length > 0) {
        return true
    } else {
        return false
    }
}


function isIncluded(arr, elem) {
    let arr2 = arr.filter(item => item === elem);
    if (arr2.length > 0) {
        return true;
    } else {
        return false;
    }
}


console.log(isIncluded([1,2,3,4,5,6,4,4], 'osidfj'))


// OPERADORES TERNARIOS

// (condition) ? (if condition true) : (if condition false)

if (arr2.length > 0) {
    return true;
} else {
    return false;
}

// es equivalente a

arr2.length > 0 ? true : false


// Entonces podemos reescribir la función anterior como
function isIncluded(arr, elem) {
    let arr2 = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === elem) {
            arr2.push(true);
        }  
    }
    return arr2.length > 0 ? true : false;
}


function isIncluded(arr, elem) {
    let arr2 = arr.filter(item => item === elem);
    return arr2.length > 0 ? true : false;
}


// GIT
// Comandos básicos

// Comandos para compartir tu código

// $ git init
// $ git add .
// $ git commit -m 'un mensaje (qué hace tu codigo en este commit)'
// $ git push 


// Comandos para jalar el código de alguien más
// $ git clone https://....  -> sirve para clonar un repositorio remoto
// $ git pull  -> jala los commits que no tienes, del repositorio remoto a tu repositorio local


// $ git status -> te dice si tienes cambios no agregados o informacion sobre commits


// Comandos de configuración de usuario (casi no se usan)
// $ git config --global user.name "username"
// $ git config --global user.email "email"

// $ git config --list  -> te da información de qué usuario está configurdo 
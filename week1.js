// Cómo declarar variables en javascript

var x = 52;

let x = 52;

const x = 52; // scope


// Tipos de datos:

// 1) string
let x = 'sdofjgorei';
const y = "Jacob es homosexual";

// 2) num
let x = 32;
let y = 45;
 
// 3) array 
let x = [1, 42, 'soy un oso', 0, ['a', 'B']];

// 4) objects
let x = {x: 'apple', y: 'orange', z: 'tree'};

//Tienenen estructura: {key: value} 

// 5) booleano 
let x = true;
let y = false;


///////////////////////////////////////////////////

// Funciones 

function sum(a,b) {
    return a + b;
}

console.log(sum(3,7));

x = "Jacob es puto";
console.log(x);


// CONDICIONALES

let x = 16;

function isGreaterThan(x) {
    if (x > 3) {
        return true;
    } else if (x === 3) {
        return false;
    } else {
        return false;
    }
}


x === y -> Bool (true, false), x == y 
x !== y -> bool (true, false)


3 == '3' -> true, x != y
3 === '3' -> false


// SIMBOLOS LOGICOS

// Igual
'31' === 31 -> false
'31' == 31 -> true

// Desigual
x !== y, 
x != y 

!true -> false 
!false -> true

// OR
condition1 || condition2 

// &
condition1 && condition2

// Mayor o igual
>=

// Menor o igual
<=


function isDividedBySix(num) {
    if ((num % 3 === 0) && (num % 2 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(isDividedBySix(53));


// STRINGS 

// length
let x = 'Mi perro se comio una torta';
console.log(x.length)

x.length -> // regresa la longitud de x

// toUpperCase()
let x = 'sodifweiosSDF sd';
console.log(x.toUpperCase())

// toLowerCase()
let y = 'sdoifwe';
console.log(y.toLowerCase())

// split() -> convierte strings en arrays
let x = 'sodijgweoji';
console.log(x.split(''));
x.split('');

// parseInt() -> convierte un string de numeros a num
let x = '34';
console.log(parseInt(x));


// typeof() -> te dice el tipo de dato 
let x = ['1324', 3453, 'asdio'];
let y = 'sdofhj';
let z = 234;
console.log(typeof(y));



// concatenation
let x = 'jacob es ';
let y = 'puto';

console.log(x + y); -> //jacob es puto


// trim() -> quita el espacio a los lados de un string


// Como poner una variable dentro de un string

let x = 'cocacola';
let y = `Jacob toma ${x} sdvjepov`;

console.log(y);










// Ejercicio:  Escribir una función que tenga de entrada un string y regrese un string con los caracteres ordenados
// en order alfabetico.


function sortString(str) {
    return str.split('').sort().join('');
}

console.log(sortString('sodifowiefwoifqoacjivs'));




// ARRAYS
// sort()
let x = ['dsdfew', 'fsdoij', 'woisdj'];
console.log(x.sort());


// join()
let x = ['dsdfew', 'fsdoij', 'woisdj'];
console.log(x.join('-'));


// Como acceder a un elemento de un array
let arr = [3, 345,'blue', 'white'];
console.log(arr[2]);


// FOR LOOPS

let arr = [3, 345,'blue', 'white'];


for (let i=0; i<arr.length; i++) {
    console.log(arr[i])
}

for (let i=0; i<arr.length; i++) {
    if (i % 2 === 0) {
        console.log(arr[i]);
    }
}



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

}
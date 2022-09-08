
let producto;

do {
    console.log("1. Alfajor $150 \n 2. Caramelos $5 \n 3. Tita $60 \n 4. Chupetin $30 \n 5. Chicle $100\n 0. Ninguno");
    producto = parseFloat(prompt("Seleccione el producto"));
    break;
} while (producto !== "0");

const Alfajor = {
    nombre: "Alfajor Jorgelin",
    clase: "Negro",
    precio: 150,
}

if (producto == 1){
let cantidad1 = prompt("Ingrese cantidad de productos");
console.log(Alfajor.precio * cantidad1);}

const Caramelo = {
    nombre: "Sugus",
    clase: "Verdes",
    precio: 5,
};

if (producto == 2){
let cantidad2 = prompt("Ingrese cantidad de productos");
 console.log(Caramelo.precio * cantidad2);}


const Tita = {
    nombre: "Tita",
    clase: "doble",
    precio: 60,
};

if (producto == 3){
let cantidad3 = prompt("Ingrese cantidad de productos")
console.log(Tita.precio * cantidad3);}

const chupetin= {
    nombre: "Chupetin Evolution",
    clase: "Azul",
    precio: 30,
};

if (producto == 4){
let cantidad4 = prompt("Ingrese cantidad de productos")
console.log(chupetin.precio * cantidad4);}

const chicle= {
    nombre: "Beldent",
    clase: "Menta",
    precio: 100,
};

if (producto == 5){
let cantidad5 = prompt("Ingrese cantidad de productos")
console.log(chicle.precio * cantidad5);}
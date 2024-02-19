//Ejercicio 1
let numero = prompt("Introduce un número");

function tablaCuadradosCubos(numero) {
    document.write("<table border='1'>");
    for(let i=1; i <= numero; i++) {
        const cuadrado = i * i;
        const cubo = cuadrado * i;
        document.write("<tr>");
        document.write("<td>" + i + "</td>");
        document.write("<td>" + cuadrado + "</td>");
        document.write("<td>" + cubo + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

tablaCuadradosCubos(numero);

//Ejercicio 2

let num1 = Math.floor(Math.random() * 100) + 1;
let num2 = Math.floor(Math.random() * 100) + 1;
let respuestaUsuario = prompt("¿Cuánto es " + num1 + " + " + num2 + "?");
let tiempoInicio = new Date();

function validarRespuesta(respuestaUsuario) {
    var tiempoFinal = new Date();

    var tiempo = (tiempoFinal - tiempoInicio)/100;

    if (respuestaUsuario == num1 + num2) {
        document.write("¡Respuesta correcta! Te tomó " + tiempo + " segundos.");
    } else {
        document.write("¡Respuesta incorrecta! Te tomó " + tiempo + " segundos.");
    }
}

validarRespuesta(respuestaUsuario);

//Ejercicio 3

function contador(numeros) {
    let negativos =0;
    let ceros = 0;
    let positivos = 0;

    for (let num of numeros) {
        if (num < 0) {
            negativos++;
        } else if (num === 0) {
            ceros++;
        } else {
            positivos++;
        }
    }
    return {negativos, ceros, positivos};
}

//casos de prueba
const caso1 = [1,-2,0,0,3,2,0,-1];
const resultado1 = contador(caso1);

console.assert(resultado1.negativos ===2);
console.assert(resultado1.positivos ===3);
console.assert(resultado1.ceros ===3);

const caso2 = [0,0,0,-8];
const resultado2 = contador(caso2);

console.assert(resultado2.negativos === 1);
console.assert(resultado2.ceros === 3);
console.assert(resultado2.positivos === 0);

//Ejercicio 4

function promedio(arreglo) {
    const promedios = [];

    for(let i of arreglo){
        let suma = 0;
        for(let j of i){
            suma += j;
        }
        promedios.push(suma/i.length);
    }
    return promedios;
}

//casos de prueba
const arreglo = [[1,2,3],[4,5,6],[7,8,9]];
const promediosArreglo = promedio(arreglo);
console.log(promediosArreglo);

const arreglo2 = [[1,5,6],[9,9,9],[3,8,2]];
const promediosArreglo2 = promedio(arreglo2);
console.log(promediosArreglo2);

//Ejercicio 5
function inverso(numero) {
    return parseInt(numero.toString().split("").reverse().join(""));
}

//casos de prueba
const numeroAInvertir = 1432;
const numeroAInvertir2 = 5423;
console.log(inverso(numeroAInvertir));
console.log(inverso(numeroAInvertir2));

//Ejercicio 6
function Avion(distancia, consumo, capacidad) {
    this.distancia = distancia;
    this.consumo = consumo;
    this.capacidad = capacidad;

    this.conbustibleNecesario = function() {
        return (this.distancia * this.consumo) / 10;
    };

    this.conbustibleSuficiente = function() {
        return this.conbustibleNecesario() <= this.capacidad;
    };
}

const avion = new Avion(1000, 5, 500);

const resultado = avion.conbustibleSuficiente() ? "Si" : "No";

document.getElementById("resultado").innerHTML = `El avión tiene suficiente combustible para llegar a su destino: ${resultado}`;
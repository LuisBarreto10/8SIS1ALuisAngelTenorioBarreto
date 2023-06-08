/*
Las variables que se ocupan dentro de JS son 3

var -> de acuerdo a EJS6 esta siendo sustituida; pero es la de uso mas comun para determinar una variable es de acceso publico

let ->  es una variable protegida que solo funciona dentro de una funcion o declaración de codigo

const -> la cual es un valor constante en todo el documento




const x = "x";
if(true){
    
    let x = "y";
    console.log(x);
}
console.log(x);



//Funcion flecha es una funcion en js que a diferencia de una funcion normal no genera su propio contexto (this), necesita ser declarada antes de ser usada y no necesita de un return 

function sumarFuncionNormal(n1, n2){
    return n1+n2;
}
// cuando ocupamos este tipo de comilla ``es para poder mandar a llamar elementos de nombres de funciones que van a ser evaluados y/o incorporar etiquetas de html y css en JS
console.log(`Vamos a sumar 3 y 4: ${sumarFuncionNormal(3,4)}`);

Una funcion flecha tiene la siguiente estructura:

"cadena" -> id, clase, name, atributo 

'' y "" es para el uso de id, clases, name

`` es para icnorporar codigo html e invocar funciones de JS

 

const sumaFuncionFlecha = (n1, n2) => n1+n2;

console.log(`Vamos a sumar 5 y 6: ${sumaFuncionFlecha(5,6)}`);


//que pasaria si solo necesitamos un parametro
const cuadradoFuncionFlecha = n1 => n1**2;

console.log(`Vamos hacer una funcion cuadratica de 7: ${cuadradoFuncionFlecha(7)}`);

*/

const razasDePerros = [
   "Gran Danes",
   "Pastor Aleman",
   "Chihuahua",
   "Belga",
   "Pitbull",
   "Dalmata",
   "San Bernardo"
];
/*
//recorremos el arreglo
for(let indice = 0; indice < razasDePerros.length; indice++){
   console.log(razasDePerros[indice]);
}


//for of
for(const raza of razasDePerros){
   console.log(raza);
}


for(const indice in razasDePerros){
   //console.log(razasDePerros[indice]);
   console.log(razasDePerros);
}




//forEach -> es iterar sobre los elementos del arreglo que no devuelven nada

razasDePerros.forEach((raza, indice, arregloOriginal) => console.log(raza));

razasDePerros.forEach((raza) => console.log(raza));



//funcion MAP  iterar sobre los elementos de un arreglo y regresar un arreglo diferentes con el cual podemos hacer operaciones

const razasDePerrosEnMayusculas = razasDePerros.map((raza, indice, arregloOriginal) => console.log(raza.toUpperCase()));

const razasDePerrosEnMayusculas = razasDePerros.map((raza) => console.log(raza.toUpperCase()));



//FIND nos permite buscar un elemento dentro del arreglo y si lo encuentra, lo regresa y sino lanza un "undefinend"

if(razasDePerros.find((raza, indice, arregloOriginal) => raza === "Chihuahua")){
   console.log("La raza se encuentra dentro del arreglo");
   console.log(razasDePerros);
}else{
   //hay que meterlo
   razasDePerros.push("Chihuahua");
   console.log("Se agrego la raza en el arreglo");
   console.log(razasDePerros);
}

*/

//FINDINDEX Es similar a la busqueda, pero en lugar de regresar el elemento, regresa su indice y si no lo encuentra nos devuelve un -1 esta funcion particularmente es util si queremos modificar el elemento original dentro de un arreglo

const indiceChihuahua = razasDePerros.findIndex((raza, indice, arregloOriginal) => raza === "Chihuahua");

if(indiceChihuahua > -1){
   //el resultado esperado pq si esta dentro del arreglo
   console.log(razasDePerros[indiceChihuahua]);
   //aparte voy agregar que diga que la raza es pequeña
   razasDePerros[indiceChihuahua] += "(Raza de perros pequeña y escandalosa)";
   console.log(razasDePerros[indiceChihuahua]);
   console.log(razasDePerros);
}else{
   console.log("no esta");
}
/*
Como habiamos dicho js es multiparadigma

en este caso vamos a ver como seria manejar
js en poo
*/ 

class FiguraGeometrica{

    //constructor
    constructor(){
        //puede o no tener alguna implementacion
    }

    //metodos
    area(){
        //metodo que se encarga de calcular el area
    }

    perimetro(){
        //metodo para el calculo de perimetros
        console.log("Este metodo calcula el perimetro");
    }
}

class Rectangulo extends FiguraGeometrica{
    //constructor
    constructor(base, altura){
        super();
        this._base = base;
        this._altura = altura;
        this._area = null;
        this._perimetro = null;
        this._actualizarArea = false;
        this._actualizarPerimetro = false;
    }

    set altura(altura){
        this._altura = altura;
        //si cambia el valor del area o perimetro hay que actualizar el dato
        this._actualizarArea = true;
        this._actualizarPerimetro = true;
    }

    set base(base){
        this._base = base;
        //si cambia el valor del area o perimetro hay que actualizar el dato
        this._actualizarArea = true;
        this._actualizarPerimetro = true;
    }

    get area(){
        if(this._actualizarArea || this._area){
            this._area = this.calcularArea();
        }
        return this._area;
    }

    get perimetro(){
        if(this._actualizarPerimetro || this._perimetro){
            this._perimetro = this.calcularPerimetro();
        }
        return this._perimetro;
    }

    calcularArea(){
        console.log(this._base);
        console.log(this._altura);
        return this._base * this._altura;
    }

    calcularPerimetro(){
        console.log(this._base);
        console.log(this._altura);
        return this._base + this._altura;
    }
}

const objetoRectangulo = new Rectangulo(2,5);

console.log(objetoRectangulo.calcularArea());
console.log(objetoRectangulo.calcularPerimetro());



//Spread
/*
Es una sintaxis que nos permite a un elemento iterable
(arreglo, matriz, vector, cadena) poder desde 0 contar
los argumentos que pasan por dicho elemento
*/

//tenemos el siguiente arreglo
const arregloOrdenadoMayorMenor = [10, 9 , 8 , 7 , 6, 5 ,4,3,2,1,0];

console.log(`Arreglo ordenado:  ${arregloOrdenadoMayorMenor} `);

//vamos a suponer que podemos obtener tantas variables del arreglo como deseemos a partir del patron

const[valorMasGrande] = arregloOrdenadoMayorMenor;
console.log(`Valor mas Grande: ${valorMasGrande}` );

//vamos a obtener el resto de los valores

const[valorMasGrande1, valorMasGrande2, valorMasGrande3, ...restoValores] = arregloOrdenadoMayorMenor;

console.log(`VMG1, VMG2, VMG3, ...Resto : ${valorMasGrande1}, ${valorMasGrande2}, ${valorMasGrande3}, ${restoValores}`);

//ejemplo de una busqueda simplificada

const resultadoDeBusqueda = {
    resultados: [
        "resultado1",
        "resultado2",
        "resultado3",
        "resultado4",
        "resultado5",
        "resultado6",
        "resultado7"
    ],
    total: 7,
    mejorCoincidencia : "resultado3"
};

console.log(`Resultado de la busqueda : ${resultadoDeBusqueda}`);

//vamos a suponer que solo nos interesa imprimir la mejor coincidencia

const {mejorCoincidencia} = resultadoDeBusqueda;

console.log(`Mejor coincidencia : ${mejorCoincidencia}`);

//vamos a suponer que queremos cambiar el nombre, derivado a que necesitamos mantener la persistencia del codigo acorde a una nomenclatura

const copiaResultadoDeBusqueda = {...resultadoDeBusqueda};

console.log(`Copia del resultado de busqueda : ${copiaResultadoDeBusqueda}`);

//vamos a modificarlo

const copiaResultadoDeBusquedaModificar = {...resultadoDeBusqueda, cadenaBuscada : "resultado3"};

console.log(`Copia modificada :  ${copiaResultadoDeBusquedaModificar}` );
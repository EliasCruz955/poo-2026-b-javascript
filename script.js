console.log("Hola mundo");

const nombre = "Elias";
let apellido = "Cruz";

console.log(nombre);
console.log(apellido);

//nombre = "Emmanuel";
apellido = "Santana";

console.log(apellido);

//Objetos de javascript
const persona = {
    nombre : "Elias",
    apellidos : "Cruz",
    edad : 20,
    apodos: [
        "animalito",
        "emma",
        "eli"
    ]
};
persona.apellidos = "Cruz Santana";
console.log(persona.apellidos);
console.log("============Fin Objetos===============");

/*
function saludar(nombre) {
    return "Hola " + nombre;
}
*/
/*
const saludar = (nombre) => {
    return "Hola " + nombre;
}
*/
const saludar = nombre => 
    "Hola " + nombre;

const saludo = saludar(persona.nombre);//== Hola Elias
console.log(saludo);
console.log("=============Fin Funciones=======================");
console.log("=================Listas=============");

const listaNumeros = [
    5, 10, 3, 8, 9
];

console.log(listaNumeros);
listaNumeros[3] = 7;
console.log(listaNumeros);

const numerosMultiplicados = listaNumeros.map(
    (numeroEnElQueVoy ) => {
        return numeroEnElQueVoy * 3;
    }
);

console.log(numerosMultiplicados);

const numerosEnObjetos = listaNumeros.map(
    (numeroEnElQueVoy) =>{
        return {
            valor: numeroEnElQueVoy
        };
    }
)
console.log(numerosEnObjetos);

//funcion filter

const numerosX = [90,70,30,10,50];
const numerosFiltrados = numerosX.filter(
    numX =>  numX > 50
);

console.log(numerosFiltrados);

const personas = [
    {
        nombre: "Elias",
        edad: 19
    },
    {
        nombre: "Emmanuel",
        edad: 18
    },
    {
        nombre: "Ruth",
        edad: 17
    }
];

const personaMayoresEdad = personas.filter (
    (personaX) => {
        return personaX.edad > 17;
    }
);
console.log(personaMayoresEdad);

//funcion reduce

const numerosY = [3,6,9,12,16];

const numerosSuma = numerosY.reduce(
    (variablePersistente, elemento) => 
        variablePersistente + elemento
    ,
    0
);
console.log(numerosSuma);
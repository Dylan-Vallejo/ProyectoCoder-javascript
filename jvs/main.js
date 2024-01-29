let nombre = prompt("ingrese su nombre").toLowerCase();
let apellido = prompt("ingrese su apellido").toLowerCase();
let materia = prompt("ingrese la materia que esta cursando (matematicas, literatura, biologia, economia, ingles)").toLowerCase();

const materias = ["matematicas", "literatura", "biologia", "economia", "ingles"];

if (materias.includes(materia)){
    alert("materia disponible");
}else{
    alert("materia no disponible")
};

let nota1 = Number(prompt("ingrese su nota del primer cuatrimestre"));
let nota2 = Number(prompt("ingrese su nota del segundo cuatrimestre"));

const generarOperacion = (operacion) =>{
    if (operacion ==="sumar"){
        return (x, y) => x + y ;
    }
};
const suma = generarOperacion("sumar");
alert(`su promedio es" ${suma(nota1, nota2) / 2}`);


let total = (nota1 + nota2) / 2;

while(total < 7){
    alert("ustes no aprobo el año, tiene que recursar");
    total = prompt("ingrese su promedio");
}
alert("usted aprobo el año y podra acceder a un premio mas adelante");

const alumnosMejorPromedios = [
    {nombre: "julieta", apellido: "correa", asistencia: "100%", nota1: 10, nota2: 10, promedio: 10},
    {nombre: "facundo", apellido: "vergara", asistencia: "98%", nota1: 10, nota2: 9.90, promedio: 9.90},
    {nombre: "rocio", apellido: "machicoti", asistencia: "99%", nota1: 10, nota2: 9.85, promedio: 9.85},
    {nombre: "elias", apellido: "villegaz", asistencia: "90%", nota1: 10, nota2: 9.84, promedio: 9.84},
    {nombre: "leandro", apellido: "gonzales", asistencia: "94%", nota1: 10, nota2: 9.50, promedio: 9.50},
    {nombre: "nicolas", apellido: "silva", asistencia: "100%", nota1: 10, nota2: 9.45, promedio: 9.45},
    
]
alert("te presentamos a los alumnos de mejor promedio, ingrese el nombre si quieres ver sus desempeños(julieta, facundo, rocio, elias, leandro, nicolas)");

let nombreAlumnoHonor = prompt("ingrese el nombre del alumno de mejores promedios");
let alumnoMejorPromedio = alumnosMejorPromedios.find((item) => item.nombre === nombreAlumnoHonor);

if (alumnoMejorPromedio){
    alert(`
    nombre: ${alumnoMejorPromedio.nombre}
    apellido: ${alumnoMejorPromedio.apellido}
    asistencia: ${alumnoMejorPromedio.asistencia}
    nota 1: ${alumnoMejorPromedio.nota1}
    nota 2: ${alumnoMejorPromedio.nota2}
    promedio: ${alumnoMejorPromedio.promedio}`)
}else{
    alert("el alumno ingresado no se encuentra entre los mejores promedios");
};

alert("como recompenza por haber aprobado el año usted podra ganar un premio al azar");

const premio = ["lapiceras", "cuadernillos", "marcadores", "mochilas", "cartucheras"];
const cantidad = [2, 3, 4, 5, 6, 7]
const obtenerPremio = () =>{
    let index = Math.floor(Math.random()* premio.length);
    return premio[index]

}

alert(`el premio que te ganaste es: ${obtenerPremio()}`);
alert("ahora se te va a indicar la cantidad mucha suerte");


const obtenerCantidad = () =>{
    let index = Math.floor(Math.random() * cantidad.length);
    return cantidad[index]
};

alert(`la cantidad de tu premio es: ${obtenerCantidad()}`);







    




   







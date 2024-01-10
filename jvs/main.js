let nombre = prompt("ingrese su nombre").toLowerCase();
let apellido = prompt("ingrese su apellido").toLowerCase();
let usuario = nombre + apellido + "98";


alert("su usuario es " + usuario);
alert("hola " + nombre + " " + apellido + ", los productos disponibles hoy son: relojes y cadenas");


let ingreso = prompt("ingrese su usuario");
while(ingreso != usuario){
    alert("usuario incorrecto");

    ingreso = prompt("ingrese su usuario").toLowerCase();
}
alert("ya puedes comprar sr/a " + nombre + " " + apellido);



let metodoPago = prompt("ingrese el metodo de pago con su tarjeta (debito o credito)").toLowerCase();

if (metodoPago === "debito"){
    alert("usted seleciono tarjeta de DEBITO");
}
else if(metodoPago === "credito"){
    alert("usted a seleccionado tarjeta de CREDITO");
}
else{
    alert("metodo de pago invalido vuelva a registrarse");
}


let moneda = prompt("ingrese la moneda con la que abonará (ars, usd, clp)").toLowerCase();

switch (moneda){
    case "ars":
        alert("usted abonara con peso argentino");
        break

    case "usd":
        alert("usted abonara en dolares");
        break

    case "clp":
        alert("usted abonara en moneda de chile");
        break

    default:
        alert("moneda no reconocida");
        break
}


function valorFinal ( ){
    let productoElegido = prompt("ingrese el producto recuerde los disponibles (relojes o cadenas)").toLowerCase();
    let cantidadProducto = prompt("ingrese la cantidad");
    let precioProducto = prompt("ingrese el precio del producto");
    let valorTotal = cantidadProducto * precioProducto;
    alert("el precio total es (el valor total se calculara en pesos argentinos): $" + valorTotal);
    
}
valorFinal()
    
    


    




   







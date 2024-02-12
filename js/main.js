let contenedor = document.getElementById("contenedor")
const productos = [
    {nombre: "remera 01", precio: 5000, imagen: "./img/imagen.png"},
    {nombre: "remera 02", precio: 1000, imagen: "./img/imagen2.png"},
    {nombre: "remera 03", precio: 5000, imagen: "./img/imagen3.png"},
    {nombre: "remera 04 sin-stock", precio: 5000, imagen: "./img/imagen4.png"},
    {nombre: "campera 05", precio: 15000, imagen: "./img/imagen5.png"},
    {nombre: "campera 06 sin-stock", precio: 15000, imagen: "./img/imagen6.png"},
    {nombre: "campera 07", precio: 15000, imagen: "./img/imagen7.png"},
    {nombre: "campera 08", precio: 15000, imagen: "./img/imagen8.png"},
    {nombre: "pantalon 09", precio: 6000, imagen: "./img/imagen9.png"},
    {nombre: "pantalon 10 sin-stock", precio: 6000, imagen: "./img/imagen10.png"},
    {nombre: "pantalon 11", precio: 6000, imagen: "./img/imagen11.png"} ,
    {nombre: "pantalon 12", precio: 6000, imagen: "./img/imagen12.png"},
    
];

const productosCarrito = []

const agregarAlCarrito = (producto) => {
    productosCarrito.push(producto);
    gaurdarStorage('productosCarrito', JSON.stringify(productosCarrito));
    alert(`"${producto.nombre}" ha sido agregado al carrito.`);
};



productos.forEach(item =>{
    
    let div = document.createElement("div");
    div.innerHTML = `
    <img src= ${item.imagen} class="producto-imagen">
    <div class="producto-detalles">
    <h3 class="producto-titulo"> ${item.nombre}</h3>
    <p class="producto-precio">precio: ${item.precio}</p>
    <button class="producto-agregar">agregar</button>
    </div>
    `
    contenedor.append(div)

    if (["remera 04 sin-stock", "campera 06 sin-stock", "pantalon 10 sin-stock"].includes(item.nombre)) {
       
        let boton = div.querySelector(".producto-agregar");
    
       
        boton.addEventListener('click', () => {
        alert("No hay stock para este producto");
        });

    }else{

        let boton = div.querySelector(".producto-agregar");
        boton.addEventListener('click', () => {
        agregarAlCarrito(item);
        });
    }
})


const gaurdarStorage = (clave,valor) => {
    localStorage.setItem(clave, valor);
};







let contenedor = document.getElementById("contenedor")
const productos = [
    {nombre: "Remera 01", precio: 5000, imagen: "./img/imagen.png", imagen2: "../img/imagen.png"},
    {nombre: "Remera 02", precio: 1000, imagen: "./img/imagen2.png", imagen2: "../img/imagen2.png"},
    {nombre: "Remera 03", precio: 5000, imagen: "./img/imagen3.png", imagen2: "../img/imagen3.png"},
    {nombre: "Remera 04 sin-stock", precio: 5000, imagen: "./img/imagen4.png", imagen2: "../img/imagen4.png"},
    {nombre: "Campera 05", precio: 15000, imagen: "./img/imagen5.png", imagen2: "../img/imagen5.png"},
    {nombre: "Campera 06 sin-stock", precio: 15000, imagen: "./img/imagen6.png", imagen2: "../img/imagen6.png"},
    {nombre: "Campera 07", precio: 15000, imagen: "./img/imagen7.png", imagen2: "../img/imagen7.png"},
    {nombre: "Campera 08", precio: 15000, imagen: "./img/imagen8.png", imagen2: "../img/imagen8.png"},
    {nombre: "Pantalon 09", precio: 6000, imagen: "./img/imagen9.png", imagen2: "../img/imagen9.png"},
    {nombre: "Pantalon 10 sin-stock", precio: 6000, imagen: "./img/imagen10.png", imagen2: "../img/imagen10.png"},
    {nombre: "Pantalon 11", precio: 6000, imagen: "./img/imagen11.png", imagen2: "../img/imagen11.png"} ,
    {nombre: "Pantalon 12", precio: 6000, imagen: "./img/imagen12.png", imagen2: "../img/imagen12.png"},
    
];

const productosCarrito = []

productos.forEach(item =>{
    
    let div = document.createElement("div");
    div.classList.add("productos");
    div.innerHTML = `
    <img src= ${item.imagen} class="producto-imagen">
    <div class="producto-detalles">
        <h3 class="producto-titulo"> ${item.nombre}</h3>
    </div>
    <div class="productos-texto">
        <p class="producto-precio">Precio: ${item.precio}</p>
        <button class="producto-agregar" id="toasty">agregar</button>
    </div>
    `
    contenedor.append(div)

    if (["Remera 04 sin-stock", "Campera 06 sin-stock", "Pantalon 10 sin-stock"].includes(item.nombre)) {
       
        let boton = div.querySelector(".producto-agregar");
    
       
        boton.addEventListener('click', () => {
        alert("No hay stock para este producto");
        });

    }else{

        let boton = div.querySelector(".producto-agregar");
        boton.addEventListener('click', () => {
        agregarAlCarrito(item);
        mostrarToast()

        
        });
    }
})


const gaurdarStorage = (clave,valor) => {
    localStorage.setItem(clave, valor);
};


const agregarAlCarrito = (producto) => {
    let carritoEnStorage = JSON.parse(localStorage.getItem('productosCarrito')) || [];
    let productoExistente = carritoEnStorage.find(item => item.nombre === producto.nombre);

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        producto.cantidad = 1;
        carritoEnStorage.push(producto);
        
    }

    localStorage.setItem('productosCarrito', JSON.stringify(carritoEnStorage));
}



if (["Remera 04 sin-stock", "Campera 06 sin-stock", "Pantalon 10 sin-stock"].includes(item.nombre)) {
       
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



function mostrarToast() {
    Toastify({
        text: "producto agregado al carrito" ,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #000000, #6f6402)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
}







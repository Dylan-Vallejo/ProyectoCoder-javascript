let contenedor = document.getElementById("contenedor");
const productosCarrito = [];

fetch("./js/data.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach(item => {
            let div = document.createElement("div");
            div.classList.add("productos");
            div.innerHTML = `
                <img src="${item.imagen}" class="producto-imagen">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${item.nombre}</h3>
                </div>
                <div class="productos-texto">
                    <p class="producto-precio">Precio: ${item.precio}</p>
                    <button class="producto-agregar">agregar</button>
                </div>
            `;
            contenedor.append(div);

            let boton = div.querySelector(".producto-agregar");
            if (["Remera 04 sin-stock", "Campera 06 sin-stock", "Pantalon 10 sin-stock"].includes(item.nombre)) {
                boton.addEventListener('click', () => {
                    alert("No hay stock para este producto");
                });
            } else {
                boton.addEventListener('click', () => {
                    agregarAlCarrito(item);
                    mostrarToast();
                });
            }
        });
    });

const gaurdarStorage = (clave, valor) => {
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
};

function mostrarToast() {
    Toastify({
        text: "producto agregado al carrito" ,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #000000, #6f6402)",
        },
        onClick: function(){} 
    }).showToast();
}
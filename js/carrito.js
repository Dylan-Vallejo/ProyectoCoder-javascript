const contenedorCarrito = document.getElementById("contenedor-carrito");
const productosCarrito = JSON.parse(localStorage.getItem("productos en el carrito")) || [];




productosCarrito.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
        <img src="${item.imagen}" class="producto-imagen">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${item.nombre}</h3>
            <p class="producto-precio">Precio: ${item.precio}</p>
        </div>
    `;
    contenedorCarrito.append(div);
});

const contenedorCarrito = document.getElementById("contenedor-carrito");
const productosCarrito = JSON.parse(localStorage.getItem("productosCarrito"));



productosCarrito.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="contenedor-productos__carrito">
        <img src="${item.imagen2}" class="producto-imagen2">
        <div class="producto-detalles2">
            <small class="small">titulo</small>
            <h3 class="producto-titulo2">${item.nombre}</h3>
        </div>
        <div class="productos-detalles-3">
            <p class="small">Cantidad: ${item.cantidad}</p>
            <p class="producto-precio">Precio: $${item.precio}</p>
        </div>
        <div class="carrito-producto-subtotal">
            <small class="small">Subtotal</small>
            <p>$${item.precio * item.cantidad}</p>
        </div>
        <button class="boton-limpiar"><img src= "../img/limpiar.png" class="limpiar-carrito"></button>
    </div>
    `;
    contenedorCarrito.append(div);
});


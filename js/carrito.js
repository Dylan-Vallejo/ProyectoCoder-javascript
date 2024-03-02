const contenedorCarrito = document.getElementById("contenedor-carrito");
let productosCarrito = JSON.parse(localStorage.getItem("productosCarrito"));

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
            <div class="cantidad-precio">
                <p class="small">Cantidad: <span class="cantidad">${item.cantidad}</span></p>
                <p class="producto-precio">Precio: $${item.precio}</p>
            </div>
            <div class="botoness">
                <button class="botoncitos sumar">+</button>
                <button class="botoncitos restar">-</button>
            </div>
        </div>
        <div class="carrito-producto-subtotal">
            <small class="small">Subtotal</small>
            <p class="subtotal">$${item.precio * item.cantidad}</p>
        </div>
        <button class="boton-limpiar"><img src="../img/limpiar.png" class="limpiar-carrito"></button>
    </div>
    `;
    contenedorCarrito.append(div);

    div.querySelector(".sumar").addEventListener("click", () => {
        item.cantidad++;
        div.querySelector(".cantidad").textContent = item.cantidad;
        div.querySelector(".subtotal").textContent = `$${item.precio * item.cantidad}`;
        localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));
    });

    div.querySelector(".restar").addEventListener("click", () => {
        if (item.cantidad > 1) {
            item.cantidad--;
            div.querySelector(".cantidad").textContent = item.cantidad;
            div.querySelector(".subtotal").textContent = `$${item.precio * item.cantidad}`;
            localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));
        }
    });

    div.querySelector(".limpiar-carrito").addEventListener("click", () => {
        productosCarrito = productosCarrito.filter(producto => producto.nombre !== item.nombre);
        div.remove();
        actualizarLocalStorage();
    });

    function actualizarLocalStorage() {
        localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));
    }
});
function mostrarToast2(){
    Swal.fire({
        title: "tu compra se a realizado con exito",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
  }

document.getElementById("comprar").addEventListener("click", () => {

    productosCarrito = [];
    contenedorCarrito.innerHTML = '';
    localStorage.removeItem("productosCarrito");
    mostrarToast2();
});

console.log(click)
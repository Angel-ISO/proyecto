//script funcionalidad de carrito y tienda

var carrito = [];
var total = 0;

function abrirModal() {
  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

function agregarAlCarrito(nombre, imagen, precio) {
  var producto = carrito.find(function(item) {
    return item.nombre === nombre;
  });

  if (producto) {
    producto.cantidad++;
    producto.total = producto.cantidad * precio;
  } else {
    producto = {
      nombre: nombre,
      imagen: imagen,
      precio: precio,
      cantidad: 1,
      total: precio
    };
    carrito.push(producto);
  }

  var count = document.getElementById("count");
  count.innerHTML = parseInt(count.innerHTML) + 1;

  var cartItems = document.querySelector(".cart-items");
  cartItems.innerHTML = "";

  carrito.forEach(function(item) {
    var cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    var imagen = document.createElement("img");
    imagen.src = item.imagen;

    var info = document.createElement("div");
    info.innerHTML = "<p>" + item.nombre + "</p><p>Precio: $" + item.precio + "</p><p>Cantidad: " + item.cantidad + "</p><p>Total: $" + item.total + "</p>";

    cartItem.appendChild(imagen);
    cartItem.appendChild(info);
    cartItems.appendChild(cartItem);

    total += item.total;
  });

  var totalElement = document.getElementById("total");
  totalElement.innerHTML = total;
}

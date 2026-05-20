// OBTENER PEDIDOS GUARDADOS
let pedidos =
JSON.parse(localStorage.getItem("pedidos")) || [];
let productos =
JSON.parse(localStorage.getItem("productos")) || [];

let totalVentas = 0;

// MOSTRAR PEDIDOS AL ABRIR
mostrarPedidos();
cargarProductos();

function guardarPedido(){

    let cliente =
    document.getElementById("cliente").value;

    let producto =
    document.getElementById("producto").value;

    let cantidad =
    Number(document.getElementById("cantidad").value);

    // VALIDAR
    if(cliente === "" || producto === "" || cantidad <= 0){

        alert("Completa todos los campos");

        return;
    }

    agregarPedido(cliente, producto, cantidad);

    mostrarPedidos();

    // LIMPIAR
    document.getElementById("cliente").value = "";

    document.getElementById("producto").value = "";

    document.getElementById("cantidad").value = "";
}

// FUNCION PARA AGREGAR PEDIDOS
function agregarPedido(cliente, producto, cantidad){

    let productoEncontrado =
    productos.find(p => p.id == producto);

    if(!productoEncontrado){

        alert("Producto no encontrado");

        return;
    }

    const pedido = {

        cliente: cliente,

        producto: productoEncontrado.nombre,

        cantidad: cantidad,

        precio: productoEncontrado.precio,

        total:
        cantidad * productoEncontrado.precio
    };
    // GUARDAR PEDIDO
    pedidos.push(pedido);

    // GUARDAR EN LOCALSTORAGE
    localStorage.setItem(
        "pedidos",
        JSON.stringify(pedidos)
    );
}


// MOSTRAR PEDIDOS
function mostrarPedidos(){

    let lista =
    document.getElementById("listaPedidos");

    lista.innerHTML = "";

    totalVentas = 0;

    pedidos.forEach(pedido => {

        let item =
        document.createElement("li");

        item.className =
        "list-group-item";

        item.textContent =
        `${pedido.cliente} - ${pedido.producto} - ${pedido.cantidad} x $${pedido.precio}`;

        lista.appendChild(item);

        totalVentas += pedido.total;
    });

    document.getElementById("ventasTotales").textContent =
    `Total ventas: $${totalVentas}`;
}
function cargarProductos(){

    let select =
    document.getElementById("producto");

    select.innerHTML =
    `<option value="">Selecciona un producto</option>`;

    productos.forEach(producto => {

        select.innerHTML += `
            <option value="${producto.id}">
                ${producto.nombre} - $${producto.precio}
            </option>
        `;
    });
}

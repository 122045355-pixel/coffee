let pedidos =
JSON.parse(localStorage.getItem("pedidos")) || [];
let productos =
JSON.parse(localStorage.getItem("productos")) || [];
let totalVentas = 0;
mostrarPedidos();
cargarProductos();
mostrarMenu();
function crearPedido() {

    let cliente =
    document.getElementById("cliente").value;

    let producto =
    document.getElementById("producto").value;

    let cantidad =
    Number(document.getElementById("cantidad").value);

    // LLAMAR FUNCION
    let pedido = agregarPedido(cliente, producto, cantidad);

    mostrarPedidos();
    
    document.getElementById("cliente").value = "";
    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";

    
}

function agregarPedido(cliente, producto, cantidad) {



    let productoEncontrado =
    productos.find(p => p.id == producto);

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
    localStorage.setItem(
    "pedidos",
    JSON.stringify(pedidos)
    );

    // SUMAR TOTAL
    totalVentas += pedido.total;

    console.log("Pedido agregado correctamente");
    console.log(pedido);
    console.log("Ventas totales: $" + totalVentas);

    return pedido;
}
function mostrarPedidos(){

    let tabla =
    document.getElementById("tablaPedidos");

    tabla.innerHTML = "";

    pedidos.forEach(pedido => {

        let fila =
        document.createElement("tr");

        fila.innerHTML = `
            <td>${pedido.cliente}</td>
            <td>${pedido.producto}</td>
            <td>${pedido.cantidad}</td>
            <td>$${pedido.precio}</td>
            <td>$${pedido.total}</td>
        `;

        tabla.appendChild(fila);
    });
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
function mostrarMenu(){

    let lista =
    document.getElementById("listaMenu");

    lista.innerHTML = "";

    productos.forEach(producto => {

        lista.innerHTML += `
            <li class="list-group-item">
                ${producto.nombre} - $${producto.precio}
            </li>
        `;
    });
}
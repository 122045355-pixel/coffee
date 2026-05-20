let pedidos = [];
let totalVentas = 0;

function crearPedido() {

    let cliente =
    document.getElementById("cliente").value;

    let producto =
    document.getElementById("producto").value;

    let cantidad =
    Number(document.getElementById("cantidad").value);

    // LLAMAR FUNCION
    let pedido = agregarPedido(cliente, producto, cantidad);

    // CREAR FILA
    let tabla =
    document.getElementById("tablaPedidos");

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

    // LIMPIAR INPUTS
    document.getElementById("cliente").value = "";
    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
}

function agregarPedido(cliente, producto, cantidad) {

    const precios = {
        CafeG: 120,
        CafeM: 90,
        Quason: 80,
        Papas: 50,
        Refresco: 35
    };

    const pedido = {
        cliente: cliente,
        producto: producto,
        cantidad: cantidad,
        precio: precios[producto],
        total: cantidad * precios[producto]
    };

    // GUARDAR PEDIDO
    pedidos.push(pedido);

    // SUMAR TOTAL
    totalVentas += pedido.total;

    console.log("Pedido agregado correctamente");
    console.log(pedido);
    console.log("Ventas totales: $" + totalVentas);

    return pedido;
}
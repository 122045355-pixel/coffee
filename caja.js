// js del lado del servidor 

// Array donde se guardarán los pedidos
let pedidos = [];
let totalVentas = 0;
// Función para agregar pedidos
function agregarPedido(cliente, producto, cantidad, precio) {

    // Crear objeto del pedido
    const pedido = {
        cliente: cliente,
        producto: producto,
        cantidad: cantidad,
        precio: precio,
        total: cantidad * precio
    };

    // Guardar pedido en el array
    pedidos.push(pedido);

    // Actualizar el total de ventas
    totalVentas += pedido.total;

    // Mostrar mensaje
    console.log("Pedido agregado correctamente");

    // Mostrar pedido agregado
    console.log(pedido);
}
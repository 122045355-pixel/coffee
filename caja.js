// OBTENER PEDIDOS GUARDADOS
let pedidos =
JSON.parse(localStorage.getItem("pedidos")) || [];

let totalVentas = 0;

// MOSTRAR PEDIDOS AL ABRIR
mostrarPedidos();

function guardarPedido(){

    let cliente =
    document.getElementById("cliente").value;

    let producto =
    document.getElementById("producto").value;

    let cantidad =
    Number(document.getElementById("cantidad").value);

    // VALIDACIONES
    if(cliente === "" || producto === "" || cantidad <= 0){

        alert("Completa todos los campos");
        return;
    }

    agregarPedido(cliente, producto, cantidad);

    // LIMPIAR INPUTS
    document.getElementById("cliente").value = "";

    document.getElementById("producto").value = "";

    document.getElementById("cantidad").value = "";
}


// FUNCION PARA AGREGAR PEDIDOS
function agregarPedido(cliente, producto, cantidad){

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

    // GUARDAR EN ARRAY
    pedidos.push(pedido);

    // GUARDAR EN LOCALSTORAGE
    localStorage.setItem(
        "pedidos",
        JSON.stringify(pedidos)
    );

    // ACTUALIZAR LISTA
    mostrarPedidos();

    console.log("Pedido agregado");
    console.log(pedido);
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

        item.className = "list-group-item";

        item.textContent =
        `${pedido.cliente} - ${pedido.producto} - ${pedido.cantidad} x $${pedido.precio} = $${pedido.total}`;

        lista.appendChild(item);

        totalVentas += pedido.total;
    });

    document.getElementById("ventasTotales").textContent =
    `Total ventas: $${totalVentas}`;
}
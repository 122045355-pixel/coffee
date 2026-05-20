let productos = [];

function agregarProducto() {

    let nombre = document.getElementById("producto").value;

    productos.push(nombre);

    mostrarProductos();

    document.getElementById("producto").value = "";
}


function mostrarProductos() {

    let lista = document.getElementById("lista");

    lista.innerHTML = "";

    for(let i = 0; i < productos.length; i++) {

        lista.innerHTML += `
            <li>
                ${productos[i]}

                <button onclick="editarProducto(${i})">
                    Editar
                </button>

                <button onclick="eliminarProducto(${i})">
                    Eliminar
                </button>
            </li>
        `;
    }
}

function editarProducto(indice) {

    let nuevoNombre = prompt(
        "Editar producto:",
        productos[indice]
    );

    productos[indice] = nuevoNombre;

    mostrarProductos();
}


function eliminarProducto(indice) {

    productos.splice(indice, 1);

    mostrarProductos();
}

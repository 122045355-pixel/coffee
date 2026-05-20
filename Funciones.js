

let productos =
JSON.parse(localStorage.getItem("productos")) || [];

// MOSTRAR PRODUCTOS AL INICIAR
mostrarProductos();


// AGREGAR PRODUCTO
function agregarProducto(){

    let nombre =
    document.getElementById("nombre").value;

    let precio =
    Number(document.getElementById("precio").value);


    // VALIDACIONES
    if(nombre === "" || precio <= 0){

        alert("Completa todos los campos");

        return;
    }


    // CREAR OBJETO PRODUCTO
    const producto = {

        id: Date.now(),

        nombre: nombre,

        precio: precio
    };


    // GUARDAR EN ARRAY
    productos.push(producto);


    // GUARDAR EN LOCALSTORAGE
    localStorage.setItem(
        "productos",
        JSON.stringify(productos)
    );


    // ACTUALIZAR TABLA
    mostrarProductos();


    // LIMPIAR INPUTS
    document.getElementById("nombre").value = "";

    document.getElementById("precio").value = "";
}


// MOSTRAR PRODUCTOS
function mostrarProductos(){

    let tabla =
    document.getElementById("tablaProductos");


    tabla.innerHTML = "";


    productos.forEach((producto, indice) => {

        let fila =
        document.createElement("tr");


        fila.innerHTML = `
            <td>${producto.id}</td>

            <td>${producto.nombre}</td>

            <td>$${producto.precio}</td>

            <td>

                <button
                    class="btn btn-warning btn-sm"
                    onclick="editarProducto(${indice})"
                >
                    Editar
                </button>


                <button
                    class="btn btn-danger btn-sm"
                    onclick="eliminarProducto(${indice})"
                >
                    Eliminar
                </button>

            </td>
        `;


        tabla.appendChild(fila);
    });
}


// EDITAR PRODUCTO
function editarProducto(indice){

    let nuevoNombre = prompt(
        "Nuevo nombre:",
        productos[indice].nombre
    );


    let nuevoPrecio = prompt(
        "Nuevo precio:",
        productos[indice].precio
    );


    if(nuevoNombre === "" || nuevoPrecio <= 0){

        alert("Datos inválidos");

        return;
    }


    productos[indice].nombre = nuevoNombre;

    productos[indice].precio = Number(nuevoPrecio);


    // ACTUALIZAR LOCALSTORAGE
    localStorage.setItem(
        "productos",
        JSON.stringify(productos)
    );


    mostrarProductos();
}


// ELIMINAR PRODUCTO
function eliminarProducto(indice){

    let confirmar = confirm(
        "¿Eliminar producto?"
    );


    if(confirmar){

        productos.splice(indice, 1);


        // ACTUALIZAR LOCALSTORAGE
        localStorage.setItem(
            "productos",
            JSON.stringify(productos)
        );


        mostrarProductos();
    }
}

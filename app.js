


let carrito = [];


function producto(nombre, precio, cant) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cant;
}


Sahumos = new producto('Sahumo', 1500, 0)
Desodorante = new producto('Desodorante Natural', 2300, 0)
Tintura = new producto('Tintura', 2000, 0)

carrito.push(Sahumos)
carrito.push(Desodorante)
carrito.push(Tintura)

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}


function recuperarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
}

/// tabla 

function dibujarTabla() {
    const bodyTabla = document.getElementById('item');
    bodyTabla.innerHTML = ``;
    carrito.forEach((item, index) => {
        bodyTabla.innerHTML = bodyTabla.innerHTML +
            `<tr>
                        <th>${index + 1}</th>
                        <td>${item.nombre}</td>
                        <td>${item.cantidad}</td>
                        <td>${item.precio}</td>
                    </tr>
        `;
    });

    calcularTotal();
}


/// calcular  tabla 


function calcularTotal() {

    let total = 0;

    carrito.forEach((item, index) => {
        total = total + (item.cantidad * item.precio);
    });

    console.log("Total en :" + total);

    const el_total = document.getElementById('total');
    el_total.innerHTML = total;

}


//////// boton sahumos /////

/// sumar

const BotonSahumos = document.getElementById('BotonSahumos');

function mostrarMensajeSahumo() {
    Sahumos.cantidad = Sahumos.cantidad + 1;
    console.log("Agregar sahumos cantidad = " + Sahumos.cantidad);
    dibujarTabla();
    

}


BotonSahumos.addEventListener('click', mostrarMensajeSahumo);

///// quietar 
const BotonSahumosDisminuir = document.getElementById('BotonSahumosDisminuir');

function disminuirSahumo() {

    if (Sahumos.cantidad != 0)
        Sahumos.cantidad = Sahumos.cantidad - 1;

    console.log("Disminuir sahumos cantidad = " + Sahumos.cantidad)
    dibujarTabla();
    

}

BotonSahumosDisminuir.addEventListener('click', disminuirSahumo);

///// Boton de desodorante ////////

/// suma 

const BotonDesodorantes = document.getElementById('BotonDesodorantes');

function mostrarMensajeDesodorante() {
    Desodorante.cantidad = Desodorante.cantidad + 1;
    console.log("Se agrega Desodorante cantidad = " + Desodorante.cantidad);
    dibujarTabla();
    
}


BotonDesodorantes.addEventListener('click', mostrarMensajeDesodorante);

const BotonDesodorantesDisminuir = document.getElementById('BotonDesodorantesDisminuir');

/// QUITAR 

function disminuirDesodorante() {


    if (Desodorante.cantidad != 0)
        Desodorante.cantidad = Desodorante.cantidad - 1
    console.log("Se restaron desodorantes cantidad = " + Desodorante.cantidad)
    dibujarTabla();
    
}

BotonDesodorantesDisminuir.addEventListener('click', disminuirDesodorante);

////// Boton de tinturas 

///  sumar
const BotonTinturas = document.getElementById('BotonTinturas');

function mosotarMensajeTintura() {
    Tintura.cantidad = Tintura.cantidad + 1;
    console.log("Se agrega Tintura madre  cantidad = " + Tintura.cantidad);
    dibujarTabla();
    
}


BotonTinturas.addEventListener('click', mosotarMensajeTintura);

/// quitar 

const BotonTinturasDisminuir = document.getElementById('BotonTinturasDisminuir');

function disminuirTintura() {


    if (Tintura.cantidad != 0)
        Tintura.cantidad = Tintura.cantidad - 1;

    console.log("Se restaron tinturas cantidad = " + Tintura.cantidad)
    dibujarTabla();
    
}

BotonTinturasDisminuir.addEventListener('click', disminuirTintura);




////////////////////////////////////////////


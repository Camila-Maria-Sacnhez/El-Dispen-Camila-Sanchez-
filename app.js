let nombre;

function cliente(nombrecliente) {

    alert('Hola' + ' ' + nombrecliente + ' ' + 'Biendenid@ al El dispensario');
}

nombre = prompt('Ingrese su nombre:');
cliente(nombre);

console.log('una persona esta visitando nuestra pagina');



let continuar = 'si';
let total = 0;
let precio;
let cantidad;
let item;


function producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const Opcion1 = new producto('Oleos maserados', 1500)
const Opcion2 = new producto('Amuletos', 2300)
const Opcion3 = new producto('Posimas', 2000)
const Opcion4 = new producto('Sahumos', 2500)

alert(
    'Tenemos los siguientes productos en nuestro catalogo' + '\n' +
    'Opcion 1:' + ' ' + Opcion1.nombre + ' ' + '$' + Opcion1.precio + '\n' +
    'Opcion 2:' + ' ' + Opcion2.nombre + ' ' + '$' + Opcion2.precio + '\n' +
    'Opcion 3:' + ' ' + Opcion3.nombre + ' ' + '$' + Opcion3.precio + '\n' +
    'Opcion 4:' + ' ' + Opcion4.nombre + ' ' + '$' + Opcion4.precio

)
console.log('Se le mostro el catalogo al cliente')





const carrito = []

function ingresoProducto(items) {
    carrito.push(items);

}

function itemsEnCarrito() {
    do {
        console.log('El cliente esta agregando  items al carrito de compra');
        items = prompt('Indique el nombre del producto que desea')
        ingresoProducto(items);
        continuar = prompt('Desea agregar otro item en el carrito de compras? Si o No');


    } while (continuar == 'si')
}

function verItems() {
    for (let i = 0; i < carrito.length; i++) {
        console.log(carrito[i]);
    }

}


itemsEnCarrito();
verItems()

function buscarProductoEnCarrito(items) {
    return carrito.includes(items);
}

const productoBusqueda = prompt('Ingrese nombre de producto que quiere corroborar:');
const estaEnCarrito = buscarProductoEnCarrito(productoBusqueda);

if (estaEnCarrito) {
    console.log(`El producto "${productoBusqueda}" está en el carrito.`);
    alert('El producto si esta en el carrito')
} else {
    console.log(`El producto "${productoBusqueda}" no está en el carrito.`);
    alert('El prodcuto no esta en el carrito')
}

function verificarElementoEnCarrito(condicion) {
    return carrito.some(item => {

        return item == "sahumos"
    });
}



function condicionPrecioMayor50(item) {
    return item == "sahumos";
}

const existeProductoCaro = verificarElementoEnCarrito(condicionPrecioMayor50);

if (existeProductoCaro) {
    console.log('Hay al menos un Sahumo  en el carrito.');
} else {
    console.log('No se encontraron Sahumos con este nombre  en el carrito.');
}


function gracias() {
    alert('Gracias por tu compra');
}

gracias();


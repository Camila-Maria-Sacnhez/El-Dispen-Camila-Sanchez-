let continuar = 'si';
let total = 0;
let precio;
let cantidad

alert ('Bienvenidos al EL DISPENSARIO' +'\n' +
'Tenemos las siguientes opciones:' +'\n' +
'1- Oleos maserados $ 1.500'+'\n' +
'2- Amuletos  $2.300'+'\n' +
'3- Posimas $2.000' +'\n' +
'4- Sahumos $2.500');

while (continuar == 'si') {
    console.log('se esta agregar item al carrito de compra');
    precio = parseFloat(prompt('Por favor coloque precio del item: '));
    cantidad = parseInt(prompt('cantidad: '));
    total = total + precio*cantidad; 
    continuar = prompt('Desea agregar otro item en el carrito de compras? Si o No');
}

alert('El total del carrito es de $'+ total);

function gracias () {
    alert ('Gracias por tu compra');
}

gracias();

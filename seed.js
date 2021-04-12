const { pedidos, productos, usuarios } = require ('./src/models');

// Users
const usersData = [
    { username: "fececba92", nombre: "fede", telefono: '4768965', direccion:'los alemanes 345', contrasena:'1234', correo:'fede@gmail.com' , rol_id:1 },
    { username: "laura123", nombre: "laura", telefono: '4556757', direccion:'artigas 789', contrasena:'1734', correo:'laura@gmail.com', rol_id:1 },
    { username: "rocio145", nombre: "rocio", telefono: '5373785', direccion:'flores 456', contrasena:'7892', correo:'rocio@gmail.com' , rol_id:2}
];

// Products
const productsData = [
    { nombre: "focaccia", precio: 10, activo:1,imagen:'https://picsum.photos/200' },
    { nombre: "verdeveggie", precio: 10, activo:1,imagen:'https://picsum.photos/200' },
    { nombre: "hamclass", precio: 10, activo:1,imagen:'https://picsum.photos/200' }
];

// Orders
const pedidosData = [
    { precio_total: 10 , fecha: '2021-03-01 12:03:23', formas_pago_id : 1, usuarios_id: 1 },
    { precio_total: 10 , fecha: '2021-04-01 12:03:23', formas_pago_id : 2 , usuarios_id: 3 },
    { precio_total: 10 , fecha: '2021-05-01 12:03:23', formas_pago_id : 3 , usuarios_id: 3 } 
];

const pedidosHasProductsData = [
    { cantidad: 1, pedido_id: 1, producto_id:1 },
    { cantidad: 1, pedido_id: 1, producto_id:2 },
    { cantidad: 1, pedido_id: 2, producto_id:2 },
    { cantidad: 1, pedido_id: 3, producto_id:3 } ]


// const data = pedidosHasProductsData.map (async ped =>  {
//    const tempPed= await pedidosHasProductos.create(ped, { fields: ["cantidad","pedido_id", "producto_id"] })
// });

pedidos.findByPk(1,{
    include:[{
        model:productos
    },{model:usuarios}]
}).then(data => console.log(data.productos.map(p=>p.nombre)))


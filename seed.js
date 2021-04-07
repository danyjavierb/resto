const Usuario = require ('./src/models/usuarios')

// Users
const usersData = [
    { username: "fececba92", nombre: "fede", telefono: '4768965', direccion:'los alemanes 345', contrasena:'1234', correo:'fede@gmail.com' , rol_id:1 },
    { username: "laura123", nombre: "laura", telefono: '4556757', direccion:'artigas 789', contrasena:'1734', correo:'laura@gmail.com', rol_id:1 },
    { username: "rocio145", nombre: "rocio", telefono: '5373785', direccion:'flores 456', contrasena:'7892', correo:'rocio@gmail.com' , rol_id:2}
];

usersData.forEach (user => {
   const tempUser=  Usuario.create(user)
   tempUser.save();
})

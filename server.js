const express = require("express");
const app = express();
const { pedidos, productos, usuarios, rol } = require("./src/models");
const jwt= require('jsonwebtoken');
const expressJwt = require('express-jwt');

const secretJwt = "asdfbhasdf5678234bhj34t87qwerv789ph12d34bhjl13f4";

const APP_PORT = process.env.APP_PORT || 3000;

app.use(express.json());

app.use(
    expressJwt({
        secret:secretJwt,
        algorithms:['HS256'],
        
    }).unless({path: ['/login']})
)

//middlewares

function validarExistenciaProducto(req, res, next) {

   productos.findByPk(req.params.id).then((prod)=> {
       if (prod != null) {
           req.dataProducto = prod;
           next();
       }else {
        res.status(400).json({"error": `id= ${req.params.id} no existe`})
       }
   }).catch(e => {
      res.status(400).json({"error": e.message})
   })
}

function validarAdmin (req,res,next) {

   if(req.user.usuario.rol.nombre =='admin' ) {
       next();
   }else {
    res.status(401).json({error: "usuario no es admin"});
   }

}

// endpoints
//login
app.post('/login', async  (req,res) => {

    const {username,contrasena} = req.body;
    const usuario = await usuarios.findOne({
    attributes: ['id','correo','nombre'],
     where: {
        username,
        contrasena },
     include: [ { model: rol} ]   
    });

    if(usuario ==null) {

        res.status(401).json({error: "username o contrasena incorrecta"});
    }else {
       

       const token = jwt.sign({
           usuario
       },secretJwt, {expiresIn: "60m"})    
       res.json({
           //usuario,
           token}) 
    }
})


// productos

app.get("/productos", async (req, res) => {
  res.status(200).json(await productos.findAll({where: {
      activo:true
  }})); // filtrar activo = true
});

app.get("/productos/:id", async (req, res) => {
  res.status(200).json(await productos.findByPk(req.params.id)); 
});

app.post("/productos", async(req, res) => {


    const {nombre, precio, activo, imagen } = req.body;

    const nuevoProducto = productos.build({nombre, precio, activo, imagen });

    try {
        res.status(201).json( await nuevoProducto.save()); 
    } catch (e) {
        res.status(400).json( {error: e.message }); 
    }

});
app.put("/productos/:id",validarExistenciaProducto,validarAdmin,async (req, res) => {
    try {
        res.status(200).json( await req.dataProducto.update (req.body))
    } catch (e) {
        res.status(400).json( {error: e.message }); 
    }
});


app.delete("/productos/:id",validarExistenciaProducto, async (req, res) => {
    try {
        res.status(200).json( await req.dataProducto.update ({activo: false}))
    } catch (e) {
        res.status(400).json( {error: e.message }); 
    }
});

//pedidos 

app.get("/pedidos", async (req, res) => {
    res.status(200).json(
        await pedidos.findAll( {
            include: [
              { model: productos,},
              { model: usuarios },
            ],
          })
    ); 
  });
  app.get("/pedidos/:id", async (req, res) => {
    res.status(200).json(
        await pedidos.findByPk(req.params.id, {
            include: [
              { model: productos,},
              { model: usuarios },
            ],
          })
    ); 
  });

app.listen(APP_PORT, () => {
  console.info("server corriendo en puerto" + APP_PORT);
});

const express = require("express");
const app = express();
const { pedidos, productos, usuarios } = require("./src/models");

const APP_PORT = process.env.APP_PORT || 3000;

app.use(express.json());

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

// endpoints
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
app.put("/productos/:id",validarExistenciaProducto,async (req, res) => {
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

app.listen(APP_PORT, () => {
  console.info("server corriendo en puerto" + APP_PORT);
});

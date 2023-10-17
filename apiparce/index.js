const express = require("express");
const cors = require("cors");
const conexion = require("./models/conexion");

//inicia base de datos
conexion();
//creamos el server node
const app = express();
const puerto = 3900;

//setting cors :: middleware para evitar error de rutas cruzadas

app.use(cors());
//convertir body de las peticiones a json
app.use(express.json());
//recibir body de los formularios
app.use(express.urlencoded({ extended: true }));

//rutas con MVC
const rutasPerfil = require("./routes/perfil");
const rutasSeguir = require("./routes/seguir");

app.use("/api", rutasPerfil);
app.use("/api", rutasSeguir);

app.listen(puerto, () => {
  console.log("server ejecutandose", puerto);
});

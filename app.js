//requiero paquetes y genero las variables(espress,path)
const express = require ('express');
const path = require ('path');
const app = express ();
const publicPath = path.resolve ('public');
// const bodyParser = require ('bodyParser');

app.use(express.static (publicPath));

// app.use(bodyParser.urlencoded({ extended: true })); 


//hago la peticion al server de las htmls
app.get ('/', (req,res) =>{
    res.sendFile (path.resolve ('./index.html'))
});

//levanto server express en puerto 3000
app.listen (process.env.PORT || 3000, function () {
    console.log ('Servidor corriendo en el puerto 3000');
});
const express = require("express");
const app = express();
const port = 8000;

//CONFIGURAMOS QUE LA CARPETA PUBLIC SEA ESTATICA.
app.use(express.static(__dirname + "/public"));

// Esto establece la ubicación donde express buscará la vista ejs
app.set('views', __dirname + '/views'); 
// Ahora configuremos el motor de visualización para que express sepa que estamos usando ejs en lugar de otro motor de jade
app.set('view engine', 'ejs');


app.get("/cars", (req,res) =>{

    res.render("autos");

});

app.get("/cats", (req,res) =>{


    res.render("gatos");

});




app.listen( port, () => console.log(`Listening on port: ${port}`) );
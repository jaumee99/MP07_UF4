const express = require("express"); 
const v1ProducteRouter = require("./v1/routes/productesRoutes");
const v1MaquinaRouter = require("./v1/routes/maquinaRoutes");
const v1EstocRouter = require("./v1/routes/estocRoutes");

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(express.json());

app.use("/v1/productes", v1ProducteRouter);
app.use("/v1/maquina", v1MaquinaRouter);
//app.use("/v1/estoc", v1EstocRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
    V1SwaggerDocs(app, PORT);
}); 
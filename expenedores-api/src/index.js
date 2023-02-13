const express = require("express"); 
const v1ProducteRouter = require("./v1/routes/productesRoutes")

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use("/v1/productes", v1ProducteRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
}); 
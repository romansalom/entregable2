import  express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const STRING_CONNECTION = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.pnpufdn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/product" , productRoutes);
app.use("/api/cart" , cartRoutes);
app.get('/' , (req,res) =>{
    res.send('hola mundo')
});



const server = app.listen (PORT , ()=>{
    console.log(`escuchando por puerto ${PORT}  `)
})



server.on('error' , (err) => {
    console.log('error starting server: ', err)
});


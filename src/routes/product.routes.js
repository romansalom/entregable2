import { Router } from "express";
import { productModel } from "../models/product.js";



const router = Router();

router.get("/" , async (req,res) => {
    try {
        const respuesta = await productModel.find().paginate(
            
        );
        res.send(respuesta);
       // const data = await respuesta.json();
      

    }catch(err){
        console.log(err);
        res.send(err);
    }

});

router.post("/" , async (req,res) =>{
    try{
        const { title , description , price , thumbnail , code ,stock ,status} = req.body;
        if(!title || !description || !price || !thumbnail || !code|| !stock || !status) {
            res.status(400).send({error: "faltan datos"});
            return
        }
        const respuesta = await productModel.create({title , description , price , thumbnail , code ,stock ,status
        });
        res.send(respuesta)

    }catch(err){
        console.log(err);
        res.send(err);

    }
});

router.put("/:id" , async (req,res) => {
    const {id} = req.params;
    const newData = {}
    try{
        const { title , description , price , thumbnail , code ,stock ,status} = req.body;

        if(!title || !description || !price || !thumbnail || !code|| !stock || !status) {
            newData = {title , description , price , thumbnail , code ,stock ,status}
            res.status(400).send({error: "faltan datos"});
            return
    }
    const respuesta = await productModel.findByIdAndUpdate(id ,newData );
    res.send(respuesta);

}catch (err) {
    console.log(err); 

    }
})

router.delete("/:id" , async (req,res) => {
    const {id} = req.params;
    id === undefined ? res.status(400).send({error : "faltan datos"}):null;
    try{
  
    const respuesta = await productModel.findByIdAndDelete(id);
    res.send(respuesta);

}catch (err) {
    console.log(err); 

    }
})


export default router;
import express from "express";
import { StoreModel } from "../models/localModel.js";

const storeRouter = express.Router();

// route for save a book
storeRouter.post('/',async(req,res) => {
    try{
        if(!req.body.title || !req.body.price || !req.body.id){
            return res.status(400).send({
                message: "send all required fileds: ttile,price,id",
            })}
        const newProduce = {
            title: req.body.title,
            price: req.body.price,
            id: req.body.id,
        };
        const book = await StoreModel.create(newProduce);
        return res.status(201).send(book);
    }
    catch(err){
        console.log(err);
        res.status(500).send({message: err.message})
    }
})

// route to get all the book
storeRouter.get('/',async (req,res) => {
   try{
    const allProducts = await StoreModel.find({});
    return res.status(200).json({
        count: allProducts.length,
        data: allProducts
    });
   }catch(err){
    console.log(err.message);
    res.status(400).send({message: err.message})
   }
})

// route to get a book by Id
// storeRouter.get('/:id',async (req,res) => {
//     try{

//     const {id} = req.params;

//     const book = await Book.findById(id)
//     return res.status(200).json(book);
//     }catch(err){
//      console.log(err.message);
//      res.status(400).send({message: err.message})
//     }
// })

// route to UPDATE a book by it's Id
// storeRouter.put('/:id',async (req,res) => {
//     try{
//         if(!req.body.title || !req.body.price || !req.body.publishYear){
//             return res.status(400).send({
//                 message: "send all required fileds: ttile,author,publisher",
//             })}

//     const {id} = req.params;

//     const result = await Book.findByIdAndUpdate(id,req.body);
//     if(result){
//         return res.status(200).send({message: "Book details Updated"})
//     }
//     else{
//         return res.status(404).json({messgae: "Book not found"})
//     }
            
//     }catch(err){
//      console.log(err.message);
//      res.status(400).send({message: err.message})
//     }
// })

// route to DELETE a book by it's Id
// storeRouter.delete('/:id',async (req,res) => {
//     try{

//     const {id} = req.params;

//     const result = await Book.findByIdAndDelete(id);
//     if(result){
//         return res.status(200).send({message: "Book Deleted successfuly."})
//     }
//     else{
//         return res.status(404).json({messgae: "Book not found"})
//     }
            
//     }catch(err){
//      console.log(err.message);
//      res.status(400).send({message: err.message})
//     }
// })

export default storeRouter; 
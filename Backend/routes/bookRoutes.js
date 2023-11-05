import express from "express";
// import { Book } from "../models/localModel.js";

const bookRouter = express.Router();

// route for save a book
bookRouter.post('/',async(req,res) => {
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({
                message: "send all required fileds: ttile,author,publisher",
            })}
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const book = await Book.create(newBook);
        return res.status(201).send(book);
    }
    catch(err){
        console.log(err);
        res.status(500).send({message: err.message})
    }
})

// route to get all the book
bookRouter.get('/',async (req,res) => {
   try{
    const allBooks = await Book.find({});
    return res.status(200).json({
        count: allBooks.length,
        data: allBooks
    });
   }catch(err){
    console.log(err.message);
    res.status(400).send({message: err.message})
   }
})

// route to get a book by Id
bookRouter.get('/:id',async (req,res) => {
    try{

    const {id} = req.params;

    const book = await Book.findById(id)
    return res.status(200).json(book);
    }catch(err){
     console.log(err.message);
     res.status(400).send({message: err.message})
    }
})

// route to UPDATE a book by it's Id
bookRouter.put('/:id',async (req,res) => {
    try{
        if(!req.body.title || !req.body.author || !req.body.publishYear){
            return res.status(400).send({
                message: "send all required fileds: ttile,author,publisher",
            })}

    const {id} = req.params;

    const result = await Book.findByIdAndUpdate(id,req.body);
    if(result){
        return res.status(200).send({message: "Book details Updated"})
    }
    else{
        return res.status(404).json({messgae: "Book not found"})
    }
            
    }catch(err){
     console.log(err.message);
     res.status(400).send({message: err.message})
    }
})

// route to DELETE a book by it's Id
bookRouter.delete('/:id',async (req,res) => {
    try{

    const {id} = req.params;

    const result = await Book.findByIdAndDelete(id);
    if(result){
        return res.status(200).send({message: "Book Deleted successfuly."})
    }
    else{
        return res.status(404).json({messgae: "Book not found"})
    }
            
    }catch(err){
     console.log(err.message);
     res.status(400).send({message: err.message})
    }
})

export default bookRouter; 
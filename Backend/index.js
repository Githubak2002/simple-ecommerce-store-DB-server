import express from "express";
// import { PORT,mongoDB_URL } from "./config.js";
import mongoose from "mongoose";
import booksRouter from "./routes/bookRoutes.js";
import storeRouter from "./routes/storeRoutes.js";
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

const app = express();

// middleware for passing req body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());
// Option 2: Allow Custom Origins
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );

app.get('/',(req,res) => {
    // console.log(req);
    return res.status(234).send("E-commerce app using Redux-toolkit");
})

// middleware for express ROUTES
app.use('/books',booksRouter);
app.use('/store',storeRouter);

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Data base connected");
        app.listen(process.env.PORT,() => {
            console.log(`Server is running at http://localhost:${process.env.PORT}`)
        });        
    })
    .catch((error) => {
        console.log(error);
    });

// console.log("Helo");
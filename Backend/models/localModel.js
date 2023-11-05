import mongoose from "mongoose";

const storeSchema = mongoose.Schema(
    {
        id:{
            type: Number,
            // required: true,
        },
        title:{
            type: String,
            // required: true,
        },
        price:{
            type: Number,
            // required: true,
        },
        description:{
            type: String,
            // required: true,
        },
        category:{
            type: String,
            // required: true,
        },
        image:{
            type: String,
            // required: true,
        },
        rating:{
            type: Number,
            // required: true,
        },
    }
)

const bookSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
        },
        author:{
            type: String,
            required: true,
        },
        publishYear:{
            type: Number,
            required: true,
        },
    },
    {
        timestamps:true,
    }
)

// export const Book = mongoose.model('Cat',bookSchema);
export const StoreModel = mongoose.model('Store-coll-1',storeSchema);
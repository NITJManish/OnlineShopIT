import mongoose from 'mongoose'
import products from './data.js'
import Product from '../models/product.js'

const seederProducts=async (req,res)=>{
    try{

        await mongoose.connect("mongodb://127.0.0.1:27017/ramekbal");

        await Product.deleteMany();
        console.log("All products deleted");

        await Product.insertMany(products);
        console.log("All product added");
        process.exit();


    }catch(error){
        console.log(error.message);
        process.exit();
    }
}

seederProducts();
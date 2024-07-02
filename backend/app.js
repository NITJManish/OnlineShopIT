import express from 'express'
const app=express();
import dotenv from 'dotenv'
import { connectDatabase } from './config/dbConnect.js';
import errorsMiddleware from './middlewares/errors.js';

//handle uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`ERROR ${err}`);
     console.log("Shutting down server due to uncaught exception")
        process.exit(1);
});



dotenv.config({ path:"backend/config/config.env" });

//connection to database
connectDatabase();

app.use(express.json());


//import all routes
import productRoutes from './routes/product.js'

app.use("/api",productRoutes);

//using error middleware
app.use(errorsMiddleware);

const server=app.listen(process.env.PORT,()=>{
    console.log(`server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})

//Handle Unhandle promise rejections
process.on("unhandledRejection",(err)=>{
     console.log(`ERROR ${err}`);
     console.log("Shutting down server due to unhandled promise rejection")
     server.close(()=>{
        process.exit(1);
     });
});
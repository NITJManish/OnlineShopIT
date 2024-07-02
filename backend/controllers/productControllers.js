import catchAsyncError from "../middlewares/catchAsyncError.js";
import Product from "../models/product.js"
import APIFilters from "../utils/apiFilters.js";
import ErrorHandler from "../utils/errorHandler.js";
//display all products => api/products
export const getAllProducts=catchAsyncError(async (req,res)=>{
    const apiFilters=new APIFilters(Product,req.query).search().filters();

    let products=await apiFilters.query;
    let filterProductCount=products.length;
    res.status(200).json({
        filterProductCount,
        products,
    })
})

//create new product => api/admin/products
export const newProduct=catchAsyncError(async (req,res)=>{

    const product=await Product.create(req.body);
    res.status(200).json({
        product,
    })
})

//get single product details => api/product/:id
export const getProductDetails= catchAsyncError(async (req,res,next)=>{

    const product=await Product.findById(req?.params?.id);
    if(!product){
        return next(new ErrorHandler("product not found",404));
    }
    res.status(200).json({
        product,
    })
}
)


//update single product details => api/product/:id
export const updateProduct=catchAsyncError(async (req,res)=>{

    let product=await Product.findById(req?.params?.id);

    if(!product){
        return next(new ErrorHandler("product not found",404));
    }

    product=await Product.findByIdAndUpdate(req?.params?.id,req.body,{new:true});

    res.status(200).json({
        product,
    })
}
)
//delete product details => api/product/:id
export const deleteProduct=catchAsyncError( async (req,res)=>{

    let product=await Product.findById(req?.params?.id);

    if(!product){
        return next(new ErrorHandler("product not found",404));
    }

    await Product.deleteOne();

    res.status(200).json({
        message:"product deleted"
    })
})

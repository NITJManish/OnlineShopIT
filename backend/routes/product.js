import express from 'express'
import { deleteProduct, getAllProducts, getProductDetails, newProduct, updateProduct } from '../controllers/productControllers.js';
const router=express.Router();

router.route("/products").get(getAllProducts);
router.route("/admin/product").post(newProduct);
router.route("/product/:id").get(getProductDetails);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);


export default router
const express=require("express");
const {addToCart,deleteSpesificItem,getLoggedUseerCart,clearCart} = require("../services/cartService");
const { protect, allowedTo } = require("../services/authService");
const router=express.Router();


router.route("/").post(protect,addToCart)
.get(protect,getLoggedUseerCart)
.delete(protect,clearCart)
router.route("/:itemId").delete(protect,deleteSpesificItem);


module.exports=router



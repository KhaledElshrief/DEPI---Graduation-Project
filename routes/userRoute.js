const { protect,allowedTo } = require("../services/authService");
const {createUser,uploadImage,reasizeImage,getSpesificUser,getAllUser,deleteUser,updateUser} = require("../services/userServices");


const express =require("express");
const router=express.Router();



router.route("/").post(uploadImage,reasizeImage,createUser)
.get(protect,allowedTo("damin","user"),getAllUser)

router.route("/:id").get(getSpesificUser)
.delete(deleteUser)
.put(updateUser)

module.exports =router;




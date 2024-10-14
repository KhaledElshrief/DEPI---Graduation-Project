
const express=require("express");
const {getSpecificData,getAllCourses,createCours,reasizeImage,uploadImage,deleteCourse,updataCourse,AllCourses} =require("../services/courseService");
const { protect, allowedTo } = require("../services/authService");

const router=express.Router();

router.route("/").post(protect,allowedTo("admin","teacher","Institution"),uploadImage,reasizeImage,createCours)
.get(AllCourses);


router.route("/:id").get(getSpecificData)
.delete(protect,allowedTo("user","admin","Institution"),deleteCourse)
.put(protect,allowedTo("user","admin","Institution"),uploadImage,reasizeImage,updataCourse);



module.exports=router;




const express=require("express");

const router=express.Router();

const {updateFeedback,deleteFeedback,getSpecificFeedback,getAllFeedback,createFeedback}=require("../services/feedbackService");
const { protect, allowedTo } = require("../services/authService");

router.route("/")
.post(protect,allowedTo("user","teacher"),createFeedback)
.get(getAllFeedback);

router.route("/:id")
.get(getSpecificFeedback)
.delete(protect,allowedTo("user","teacher"),deleteFeedback)
.put(protect,allowedTo("user","teacher"),updateFeedback)


module.exports=router







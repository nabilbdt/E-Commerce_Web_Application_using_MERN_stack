const express = require("express");
const router = express.Router();
const multer= require('multer')

const {createSlider, getAllSlider, getS}=require('../controller/sliderCtrl')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"C:/Users/Dell/OneDrive/Desktop/mern_ecommerce/backend/uploads");
    },
    filename : (req,file,cb)=> {
        cb(null,file.originalname);
    }

})

const upload=multer({storage:storage})


router.get("/",getAllSlider)
router.get("/:id",getS)
router.post("/",upload.single("productImage"), createSlider);

module.exports = router;

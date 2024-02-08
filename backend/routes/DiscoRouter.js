const express = require("express");
const router = express.Router();
const multer= require('multer')

const {createD, getAllD, getD}=require('../controller/DiscountCtrl')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"C:/Users/u/Downloads/Front_E-commerce_website_using_Reactjs-main/backend/uploads");
    },
    filename : (req,file,cb)=> {
        cb(null,file.originalname);
    }

})

const upload=multer({storage:storage})


router.get("/",getAllD)
router.get("/:id",getD)
router.post("/",upload.single("productImage"), createD);

module.exports = router;

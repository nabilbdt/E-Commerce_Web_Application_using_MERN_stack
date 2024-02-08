const Discount = require('../models/discountModel');

async function getAllD(req,res){
  const products=await Discount.find()
  res.json(products);
}

async function getD(req,res){
  const idP=req.params.id;
  const p= await Discount.findById(idP)
  res.json(p)


}

async function createD(req, res){

    // const p = JSON.parse(req.body.productData);
    // p.images ='/uploads/'+req.file.originalname;
    const p =JSON.parse(req.body.productData);
    p.image= '/uploads/'+req.file.originalname;
    try{
    await Discount.create(p)
      res.status(201)  
    }catch(error){
      res.status(500).send(error)
      console.log(error);
    }
  }
  ;

  module.exports = {createD,getAllD,getD}
const Product = require("../models/productModel");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const slugify = require("slugify");
// const validateMongoDbId = require("../utils/validateMongodbId");

const createProduct = asyncHandler(async (req, res) => {

  // const p = JSON.parse(req.body.productData);
  // p.images ='/uploads/'+req.file.originalname;
  const p =JSON.parse(req.body.productData);
  p.image= '/uploads/'+req.file.originalname;
  try{
  await (await Product.create(p)).populate('category')
    res.status(201)  
  }catch(error){
    res.status(500).send(error)
    console.log(error);
  }
});

const showCategoryProducts = asyncHandler(async (req, res) => {
  const categoryId = req.params.id;

  try {
    const productsInCategory = await Product.find({ category: categoryId });
    res.json(productsInCategory);
  } catch (error) {
    console.error('Erreur lors de la récupération des produits par catégorie :', error);
    res.status(500).json({ erreur: 'Erreur interne du serveur' });
  }
});



const updateProduct = asyncHandler(async (req, res) => {
  const idP=req.params.id
  const p=req.body;
  await Product.findByIdAndUpdate(idP,p);
  res.send("le produit a ete modifie");
});

async function deleteProduct(req, res){
  const idP = req.params.id
   
    await Product.findByIdAndDelete(idP)
    res.send("le produit a ete supp");

};

const getaProduct = asyncHandler(async (req, res) => {
  const idP=req.params.id;
    const p= await Product.findById(idP)
    res.json(p)

});

const getAllProduct = asyncHandler(async (req, res) => {
  try {
    // Filtering
    const queryObj = { ...req.query };
    const excludeFields = ["page", "sort", "limit", "fields"];
    excludeFields.forEach((el) => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);

    let query = Product.find(JSON.parse(queryStr));

    // Sorting

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query = query.sort(sortBy);
    } else {
      query = query.sort("-createdAt");
    }

    // limiting the fields

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query = query.select(fields);
    } else {
      query = query.select("-__v");
    }

    // pagination

    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);
    if (req.query.page) {
      const productCount = await Product.countDocuments();
      if (skip >= productCount) throw new Error("This Page does not exists");
    }
    const product = await query;
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});


module.exports = {
  createProduct,
  getaProduct,
  getAllProduct,
  updateProduct,
  deleteProduct,
 
  showCategoryProducts

};

import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import {  getCategoryProduct } from '../../../services/ProdService'
import './show.css'
const Showc = ({ p, addToCart }) => {
    
    const [products,setP]=useState([])
    
    const {id}=useParams();

    useEffect(()=>{
      
      fetchProduct()
    },[]);
    async function fetchProduct(){
        const resp = await getCategoryProduct(id);
        console.log(resp);
        
        setP(resp.data);
       

        
        
    }


   
  return (
    
     
    
      
    // <div className="container-fluid py-5">
    // <div className="row justify-content-center">
    <div>
      {products.map((p, index) => (


<div className="d-flex flex-wrap justify-content-center">
  {products.map((p, index) => (
    <div className="card text-center bg-dark m-2 animate__animated animate__fadeInUp" style={{ width: '18rem' }} key={index}>
      <div className="overflow">
        <img src={"http://localhost:4000" + p.image} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{p.title}</h4>
        <div className="d-flex justify-content-between">
          <span>SOLD</span><span>{p.sold}%</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Quantity left</span><span>{p.quantity}</span>
        </div>
        <div className="d-flex justify-content-between">
          <span>Price</span><span>${p.price}</span>
        </div>
        <p className="card-text text-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam deserunt fuga accusantium excepturi quia, voluptates obcaecati nam in voluptas perferendis velit harum dignissimos quasi ex? Tempore repellat quo doloribus magnam.
        </p>
        <a
          href
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
          onClick={() => addToCart(p)}
        >
          Add To Cart
        </a>
        <Link to={`/showcV/${p._id}`} >
                    <button >
                      <i className='fa fa-eye'></i>
                    </button>
                    </Link>
      </div>
    </div>
  ))}
</div>


        // <div className="col-md-4 mb-4" key={index}>
        //   <div className="card text-black mx-3" style={{ width: '200px' }}>
        //     <i className="fa-lg pt-3 pb-1 px-3"></i>
        //     <img
        //       src={"http://localhost:4000" + p.image}
        //       className="card-img-top w-50 ms-5"
        //       alt="Product"
        //     />
        //     <div className="card-body">
        //       <div className="text-center">
        //         <h5 className="card-title">{p.title}</h5>
        //       </div>
        //       <div>
        //         <div className="d-flex justify-content-between">
        //           <span>SOLD</span><span>{p.sold}%</span>
        //         </div>
        //         <div className="d-flex justify-content-between">
        //           <span>Quantity left</span><span>{p.quantity}</span>
        //         </div>
        //         <div className="d-flex justify-content-between total font-weight-bold mt-4">
        //           <span>Price</span><span>${p.price}</span>
        //         </div>
        //         <div className="text-center mt-3">
        //           <button className='btn btn-primary' >Add To Cart</button>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </div>
      ))}
     </div>
  // </div>
  
     
    
    
  
   
   
    
  
  )
}

export default Showc
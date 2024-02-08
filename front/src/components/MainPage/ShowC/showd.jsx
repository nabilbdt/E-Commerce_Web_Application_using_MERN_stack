import React, { useEffect, useState } from 'react'
import {  useParams } from "react-router-dom"

import { getD } from '../../../services/CatServices'
function Showd( ) {
    const [title,setName] = useState('')
    const [image,setImage] = useState(null)
    const [price,setPrice] = useState(0)
   
    const {id}=useParams();

    useEffect(()=>{
      
      fetchProduct()
    },[]);
    async function fetchProduct(){
        const resp = await getD(id)
       setName(resp.data.title)
       setPrice(resp.data.description)
     
       setImage(resp.data.image)
    }


   
  return (
    <section className='ms-5'>
      <div className="container mw-100 py-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card text-black">
              <i className=" fa-lg pt-3 pb-1 px-3"></i>
              <img
                src={"http://localhost:4000"+image}
                className="card-img-top w-50 ms-5"
                alt="Apple Computer"
              />
              <div className="card-body">
                <div className="text-center">
                  <h5 className="card-title">{title}</h5>
                 
                </div>
                <div>
                  <div className="d-flex justify-content-between">
                    <span>SOLD</span><span>25%</span>
                  </div>
                  
                  <div className="d-flex justify-content-between">
                    <span>Quantity left</span><span>25</span>
                  </div>
                  <div className="d-flex justify-content-between total font-weight-bold mt-4">
                    <span>Price</span><span>${price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="description">
              <button className='btn btn-info'>Add To Cart</button>
             
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Showd
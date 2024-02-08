import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "../newarrivals/style.css"
import { Link } from "react-router-dom"

import { getAllD } from "../../services/CatServices"

const Dcard = () => {


  const [products,setProducts]=useState([]);

useEffect(()=>{
    fetchProducts();
},[]);

async function fetchProducts(){
    const resp= await getAllD();
    setProducts(resp.data)
    // const token =localStorage.getItem('jwtToken')
    // console.log('tokeen' + token)
    
}
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Slider {...settings}>
        {products.map((value, index) => {
          return (
            <>
              <div className='box product' key={index}>
                <div className='img'>
                  <img src={"http://localhost:4000"+value.image} alt='' width='100%' />
                </div>
                <h4>{value.title}</h4>
                <span>{value.description}$</span><span></span>
                <Link to={`/showd/${value._id}`} >
                    <button >
                      <i className='fa fa-eye'></i>
                    </button>
                    </Link>
              </div>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Dcard

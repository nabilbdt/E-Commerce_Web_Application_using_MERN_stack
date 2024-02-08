import React, { useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Data from "./components/Data"
import Show from "./components/show/Show"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Login from "./components/MainPage/login/Login"
import Add from "./components/admin/Add"
import ProductList from "./components/admin/ProductList"
import Showc from "./components/MainPage/ShowC/Showc"
import EditProduct from "./components/admin/EditProduct"
import Registre from "./components/MainPage/login/Register"
import CreatS from "./components/admin/CreatS"
import ShowS from "./components/MainPage/ShowC/ShowS"
import CreatD from "./components/admin/CreadD"
import Showd from "./components/MainPage/ShowC/showd"
import ShowcV from "./components/MainPage/ShowC/showcV"

function App() {
  

  const { productItems } = Data
  
  const [CartItem, setCartItem] = useState([]);
  
  const addToCart = (product) => {
    const productIndex = CartItem.findIndex((item) => item.id === product.id);
    
    if (productIndex !== -1) {
      const updatedCart = CartItem.map((item, index) => {
        if (index === productIndex) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      setCartItem(updatedCart);
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };
  

 
  const decreaseQty = (product) => {
  
    const productExit = CartItem.find((item) => item.id === product.id)

    
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id))
    } else {
      
      setCartItem(CartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }

  return (
    <>
      <Router>
        <Header CartItem={CartItem} />
        <Switch>
          <Route path='/' exact>
            <Pages productItems={productItems} addToCart={addToCart}  />
          </Route>
          <Route path='/cart' exact>
            <Cart CartItem={CartItem} addToCart={addToCart} decreaseQty={decreaseQty} />
          </Route>
          <Route path="/show/:id">
            <Show />
          </Route>
         
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registre">
            <Registre />
          </Route>
            <Route path="/list">
            <ProductList/>
            </Route>
            <Route path="/showc/:id">
            <Showc productItems={productItems} addToCart={addToCart}  />
            </Route>
            <Route path="/shows/:id">
            <ShowS />
            </Route>
            <Route path="/showd/:id">
           <Showd />
            </Route>
            <Route path="/showcV/:id">
           <ShowcV productItems={productItems} addToCart={addToCart} />
            </Route>
            
            <Route path="/edit/:id">
            <EditProduct />
            </Route>
            <Route path="/createSlider">
              <CreatS />
            </Route>
            <Route path="/creatD">
              <CreatD />
            </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App

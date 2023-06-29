import { Routes, Route } from "react-router-dom";
import './App.css'
import AppLayout from './pages/AppLayout.jsx';
import Home from './pages/Home.jsx'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx';
import Product from './pages/Product.jsx'
import SingleProduct from './pages/SingleProduct.jsx';
import Cart from './pages/Cart.jsx'


function App() {
 
  return (
    <>
        <Header />
        <Routes>
        <Route
            path="/"
            element={
             <AppLayout />
            }
          >
             <Route index  element={
                <Home />
          } />
           <Route path="/product" element={
               <Product />
           } 
           />
           <Route path="/products/:productId" element={
            <SingleProduct />
            }  />
           
           <Route path="cart" element={
            <Cart />
            }  />
           </Route>

        </Routes>
        <Footer /> 
    </>
  )
}

export default App

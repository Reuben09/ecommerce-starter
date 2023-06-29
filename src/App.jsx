import { Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AppLayout from './pages/AppLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'
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
               <Products />
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

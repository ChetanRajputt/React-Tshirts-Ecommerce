import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Allproducts, Home, Mugs, ProductDetails, TShirts } from "./pages/element.js"
import Test from './pages/Test.jsx'
import ProductContextProvider from './context/ProductContextProvider.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import MyAccount from './pages/MyAccount.jsx'
import CartPage from './pages/CartPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />} />
        <Route path='/all-products' element={<Allproducts />} />
        <Route path='/tshirts' element={<TShirts />} />
        <Route path='/mugs' element={<Mugs />} />
        <Route path='/about' element={<About />} />
        <Route path='productdetails/:productId' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-account' element={<MyAccount />} />
        <Route path='/cart' element={<CartPage />} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContextProvider>
      <RouterProvider router={router} />
    </ProductContextProvider>
  </React.StrictMode>,
)

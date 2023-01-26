import React, { createContext } from 'react'
import { useState } from 'react'

export const CartInfo = createContext()

const CartContext = ({children}) => {

	const [products, setProducts] = useState([])

  const addProduct = (product) =>{

    debugger

    if(isInCart(product.id)){
      let productFound = products.find(elm => elm.id === product.id)
      productFound.quantity += product.quantity;
      setProducts([...products,productFound])
    }else{
      setProducts([...products,product])
    }

    console.log(products)
  }

  const decrementProduct = (product) =>{
    const productExist = isInCart(product.id)

    debugger

    if(productExist){
      let productFound = products.find(elm => elm.id === product.id)
      productFound.quantity -= product.quantity;
      setProducts([...products])
    }else{
      setProducts([...products,product])
    }

    console.log(products)
  }

  const removeItem = (itemId) => {
    if(isInCart(itemId)){
      debugger
      const productsUpdate = products.filter(elm => elm.id !== itemId)
      setProducts(productsUpdate)
    }
  }

  const isInCart = (idProduct) => {
    return products.some(elm => elm.id === idProduct)
  }

  const clear = () => {
    setProducts([])
    console.log("clear")
  }
  

  const countCart = () =>{
    let totalCountProducts = 0;
    for(const product of products){
      totalCountProducts += product.quantity;
    }
    return totalCountProducts;
  }

  return (
    <CartInfo.Provider value={{products, addProduct, removeItem, countCart ,clear,decrementProduct}}>
        {children}
    </CartInfo.Provider>
  )
}

export default CartContext
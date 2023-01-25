import React from 'react'
import { useContext } from 'react'
import { CartInfo } from '../../context/CartContext'
import "../item/Item.css"
import "../itemDetails/ItemDetails.css"
import "./Cart.css"


const ShowCartInfo = () => {
  
  const {removeItem, clear, addProduct, products,decrementProduct} = useContext(CartInfo)

  const editQuantity = (product) => {
    return (
      <>
        <div className='row'>
          <div className='col-lg-4'>
            <i onClick={() => decrementProduct(product)} class="bi bi-arrow-down fs-3"></i>
          </div>
          <div className='col-lg-4 fs-5'>
            {product.quantity}
          </div>
          <div className='col-lg-4'>
            <i onClick={() => addProduct(product)} class="bi bi-arrow-up fs-3"></i>
          </div>
          
        </div>

      </>

    )
  }

  // console.log(products)

  const deleteProduct = () => {
    console.log(products)
    removeItem(products.id)
  }



  return (
    <div className='container centerItemDetails backgroundColor'>
      
      <div className=''>
        <table className='table table-striped table-hover caption-top'>
          <caption>Carrito de compras</caption>
          <thead>
            <tr className='text-center'>
              <th scope="col">Imagen</th>
              <th scope="col">Nombre producto</th>
              <th scope="col">Precio</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {products.map(prod => {
              return(
                <tr id='overflowColum' className='text-center'>
                  <th><img className='rounded  maxSizeCart' src={prod.image} alt="iimageProduct"/></th>
                  <th>{prod.title}</th>
                  <th>{prod.price}</th>
                  <th scope="col">{editQuantity(prod)}</th>
                  <th scope="col" >
                      <i onClick={()=>removeItem(prod.id)} class="bi bi-x fs-1"/>
                  </th>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className='text-end'>
          <button onClick={()=>clear()} className='me-3 btn btn-primary'>
            Vaciar carrito
          </button>
          <button className='me-2 btn btn-primary'>
            Terminar mi compra
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShowCartInfo
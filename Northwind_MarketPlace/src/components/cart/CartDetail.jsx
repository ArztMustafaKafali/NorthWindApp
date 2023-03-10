import alertify from 'alertifyjs'
import React from 'react'
import {MdOutlineAddShoppingCart} from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Table } from 'reactstrap'
import {removeFromCart} from "./CartListSlicer"


const CartDetail = () => {
  const carts = useSelector((state)=>state.carts.carts)
  const dispatch = useDispatch()
  const removeFromCarts  = (product)=>{
    dispatch(removeFromCart(product.id))
    alertify.error(product.productName + " sepetten çıkarıldı")
  }
  return (
    <div>
      <h3>CartDetail</h3>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
            <th>Product Stock</th>
            <th> <MdOutlineAddShoppingCart></MdOutlineAddShoppingCart> </th>
          </tr>
        </thead>
        <tbody>
            {
              carts.map((cart)=>{
                return(
                  <tr key={cart.product.id}>
                    <td> {cart.product.categoryId} </td>
                    <td> <Link to={"/productDetail/" + cart.product.id}> {cart.product.productName} </Link></td>
                    <td> {cart.product.quantityPerUnit} </td>
                    <td> {cart.product.unitPrice} </td>
                    <td> {cart.product.unitsInStock} </td>
                    <td> <Button onClick={()=>removeFromCarts(cart.product)} color='danger'>Sepetten Çıkar</Button> </td>
                  </tr>
                )
              })
            }
        </tbody>
      </Table>
      
    </div>
  )
}

export default CartDetail

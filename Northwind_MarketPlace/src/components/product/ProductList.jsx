import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Badge, Button, Table } from 'reactstrap'
import { getProduct } from './productListSlicer'
import {MdOutlineAddShoppingCart} from "react-icons/md"
import { Link } from 'react-router-dom'
import "./ProductList.css"
import { addToCart } from '../cart/CartListSlicer'
import alertify from 'alertifyjs'

const ProductList = () => {
  const products = useSelector((state)=>state.products.products)
  const currentCategory = useSelector((state) => state.currentCategory.currentCategory)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProduct())
  },[])
  const addToCarts = (product)=>{
    dispatch(addToCart({
      quantity : 1,
      product
    }))
    alertify.success(product.productName + " sepete eklendi")
  }
  return (
    <div>
      <h3><Badge color='success'>ProductList</Badge> - <Badge color='danger'> {currentCategory.categoryName} </Badge></h3>
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
              products.map((product)=>{
                return(
                  <tr key={product.id}>
                    <td> {product.categoryId} </td>
                    <td> <Link to={"/productDetail/" + product.id} state = {{productId : product.id}}> {product.productName} </Link></td>
                    <td> {product.quantityPerUnit} </td>
                    <td> {product.unitPrice} </td>
                    <td> {product.unitsInStock} </td>
                    <td> <Button onClick={()=>addToCarts(product)} color='success'>Sepete Ekle</Button> </td>
                  </tr>
                )
              })
            }
        </tbody>
      </Table>
    </div>
  )
}

export default ProductList

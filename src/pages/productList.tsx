import React from 'react'
import {Link} from 'react-router-dom'
import {ProductType} from '../types/productType'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

type ProductListProps = {
  products: ProductType[];
  onRemove: (id: string) => void
}

const ProductList = (props: ProductListProps) => {
  return (
    <div>
      <h1><Link to='/product/add'>Thêm sản phẩm</Link></h1>
      <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>PRICE</th>
          <th>IMG</th>
          <th>DESCRIPTION</th>
          <th>ACTION</th>
        </tr>
      
          {props.products.map((item, index) => {
            return <tr>
            <td>{index +1}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.img}</td>
          <td>{item.description}</td>
          <td>
            <Link to={`/product/${item.id}/edit`}>EDIT</Link><button onClick={() => props.onRemove(item.id)}>DELETE</button><ToastContainer/>
          </td>
        </tr>
          })}
          

      </table>
    </div>
  )
}

export default ProductList
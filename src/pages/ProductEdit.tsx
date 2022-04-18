import React, {useEffect} from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { read } from '../api/product'
import { ProductType } from '../types/productType'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

type Form = {
  name: string,
  price: number,
  img: string,
  description: string
}
type ProductEditProps = {
  onUpdate: (product: ProductType) => void
}

const ProductEdit = (props: ProductEditProps) => {
  const {register, handleSubmit, formState: {errors},reset} = useForm<Form>()
  const {id} = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    const getProduct = async () => {
      const {data} = await read(id)
      reset(data)
    }
    getProduct()
  },[])
  const onSubmit: SubmitHandler<Form> = data => {
    props.onUpdate(data)
   
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='tên sản phẩm' {...register('name', {required:true, minLength:5})} />
        
        <input type='number' placeholder='giá sản phẩm' {...register('price', {required:true})} />
        <input type='text' placeholder='ảnh sản phẩm' {...register('img', {required:true})} />
        <input type='text' placeholder='mô tả sản phẩm' {...register('description', {required:true})} />
        {errors.name && <span>Bắt buộc phải nhập</span>}
        {errors.name?.type === 'minLength' && "nhập trên 5 kí tự"}
        {errors.price && <span>Bắt buộc phải nhập</span>}
        {errors.img && <span>Bắt buộc phải nhập</span>}
        {errors.description && <span>Bắt buộc phải nhập</span>}

        <button>EDIT</button>
        
      </form>
      <ToastContainer/>
    </div>
  )
}

export default ProductEdit
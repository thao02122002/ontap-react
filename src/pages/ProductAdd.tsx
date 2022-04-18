import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


type Inputs = {
  name: string,
  price: number,
  img:string,
  description: string
}
type ProductAddProps = {
  onAdd: (product: Inputs) => void

}

const ProductAdd = (props: ProductAddProps) => {
  const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()
  
  const onSubmit: SubmitHandler<Inputs> = data => {
    props.onAdd(data)
    
    
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

        <button>Thêm</button>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default ProductAdd
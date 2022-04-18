import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {useNavigate, useParams} from 'react-router-dom'
import { signin } from '../api/user'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


type Form = {
  id:number,
  email: string,
  password: string
}

const Signin = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<Form>()
  const navigate = useNavigate()

  
  const onSubmit: SubmitHandler<Form> = async user => {
  const {data} = await signin(user)
  
  if(data) {
    toast.success('Đăng nhập thành công chờ 3s để chuyển trang')
    setTimeout(() => {
      navigate('/')
      localStorage.setItem('user', JSON.stringify(user))
    }, 3000)
  }
  
   
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='email' placeholder='Email user' {...register('email',{required: true})} />
        <input type='password' placeholder='Password user' {...register('password',{required: true})} />
        {errors.email && <span>Bắt buộc phải nhập trường này</span>}
        {errors.password && <span>Bắt buộc phải nhập trường này</span>}
        <button>Đăng nhập</button>
        <ToastContainer/>
      </form>
    </div>
  )
}

export default Signin
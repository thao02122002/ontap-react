import React from 'react'
import {useForm, SubmitHandler} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { signup } from '../api/user'


type Form = {
  username: string,
  email: string,
  password: string
}

const Signup = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<Form>()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<Form> = async (user) => {
  const {data} = await  signup(user)
  if(data) {
    toast.success('Đăng kí thành công vui lòng chờ 3s')
    setTimeout(() => {
      navigate('/signin')
    }, 3000)
  }
   
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='Tên user' {...register('username',{required: true})} />
        <input type='email' placeholder='Email user' {...register('email',{required: true})} />
        <input type='password' placeholder='Password user' {...register('password',{required: true})} />
        {errors.username && <span>Bắt buộc phải nhập trường này</span>}
        {errors.email && <span>Bắt buộc phải nhập trường này</span>}
        {errors.password && <span>Bắt buộc phải nhập trường này</span>}
        <button>Đăng kí</button>
        <ToastContainer/>
      </form>
    </div>
  )
}

export default Signup
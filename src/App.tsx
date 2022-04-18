import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { ProductType } from './types/productType'
import { create, list, remove, update } from './api/product'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ProductList from './pages/productList'
import Home from './pages/home'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRouter from './pages/PrivateRouter'

function App() {
  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() => {
    const getProduct = async () => {
      const {data} = await list()
      setProducts(data)
    }
    getProduct()
  },[])
  const navigate = useNavigate()
  const onHandleAdd = async (product: ProductType) => {
    try {
      const {data} = await create(product)
    
    
    if(data) {
      toast.success('thêm thành công')
      setProducts([...products,data])
      setTimeout(() => {
        navigate('/product')
      },3000)
    }
      
    } catch (error) {
      
    }
    
    
    
  }

  const onHandleRemove = async (id: string) => {
    if(window.confirm('bạn có chắc chắn muốn xóa hay k ?')) {
      const {data} = await remove(id)
      if(data) {
        toast.success('xóa thành công')
        setProducts(products.filter(item => item.id !== id))
      }
    }
   
  }

  const onHandleUpdate = async (product: ProductType) => {
    const {data} = await update(product)
    if(data) {
      toast.success('Sửa sp tahnfh công')
      setProducts(products.map(item => item.id === data.id ? product : item))
      setTimeout(() => {
        navigate('/product')
      },3000)
    }
    
  }

  return (
    <div className="App">
      <Routes>
        
        <Route path='/' element={<Home />}>
          <Route path='/product' element={<PrivateRouter><ProductList products={products} onRemove={onHandleRemove} /></PrivateRouter>}/>
            <Route path='/product/add' element={<ProductAdd onAdd={onHandleAdd} />} />
            <Route path='/product/:id/edit' element={<ProductEdit onUpdate={onHandleUpdate}/>} />
          

        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />

        
      </Routes>
      
    </div>
  )
}

export default App

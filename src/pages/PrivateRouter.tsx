import React from 'react'
import {Navigate} from 'react-router-dom'
import {isAuthenticate} from '../utils/localStorage'

type PrivateRouterProps = {
  children: JSX.Element
}

const PrivateRouter = (props: PrivateRouterProps) => {
  const user = isAuthenticate()
  console.log(user);
  
  
  
  if(user.id !== 1) {
    <Navigate to='/signin' />
  }
 
  return props.children
}

export default PrivateRouter
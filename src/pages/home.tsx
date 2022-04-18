import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <h1>Home</h1>
     <Outlet />
     
    </div>
  )
}

export default Home
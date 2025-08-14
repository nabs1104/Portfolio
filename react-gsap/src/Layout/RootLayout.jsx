import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/navbar'
import Cursor from '../Components/cursor'

function RootLayout() {
  return (
    <div>
      <Cursor />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default RootLayout
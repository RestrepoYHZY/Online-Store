import React from 'react'
import NavBarPage from './components/NavBar/NavBarPage'
import { Outlet } from "react-router";

const App = () => {
  return (
    <>
      <NavBarPage/>
      <Outlet/>
    </>
  )
}

export default App

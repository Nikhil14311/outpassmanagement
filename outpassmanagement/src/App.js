import React from 'react'
import Login from './pages/Login'
import Navbar from './pages/Navbar'
import Dashboard from './pages/Dashboard'
import MainRoute from './navigation/MainRoute'

const App = () => {
  return (
    <div style={{width:'100%',height:'100vh'}}>
      <MainRoute />
    </div>
  )
}

export default App
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../pages/Navbar'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import RequestForm from '../pages/RequestForm'
import AboutUs from '../pages/AboutUs'

const MainRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Dashboard />} />
          <Route path="requestform" element={<RequestForm />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MainRoute
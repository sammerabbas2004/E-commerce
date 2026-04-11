import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserLogin from '../pages/UserLogin'
import UserRegister from '../pages/UserRegister'
import FoodPartnerLogin from '../pages/FoodPartnerLogin'
import FoodPartnerRegister from '../pages/FoodPartnerRegister'
import Home from '../pages/general/Home'
import CreateFoodItem from '../pages/Food-partner/CreateFoodItem'
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
        <Route path="/" element={<Home />} />
        <Route path='/create-food-item' element={<CreateFoodItem />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes

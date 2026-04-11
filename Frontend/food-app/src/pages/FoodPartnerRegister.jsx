import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/theme.css'
import '../styles/auth.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const FoodPartnerRegister = () => {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Collect form data
    const restaurantName = e.target.restaurantName.value;
    const managerName = e.target.managerName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
  // Send registration request to backend
  const response = await axios.post("http://localhost:3000/api/auth/foodpartner/register", {
      Restaurantname: restaurantName,
      ManagerName: managerName,
      email,
      password
    },{
      withCredentials: true
    });
    console.log(response.data)
    navigate("/create-food-item")// Redirect to login page after successful registration
  };


  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        {/* Header */}
        <div className="auth-header">
          <div className="auth-logo">👨‍🍳</div>
          <h1 className="auth-title">Partner Registration</h1>
          <p className="auth-subtitle">Grow your restaurant with us</p>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Restaurant Name */}
          <div className="form-group">
            <label htmlFor="restaurantName" className="form-label">
              Restaurant Name
            </label>
            <input
              type="text"
              id="restaurantName"
              className="form-input"
              placeholder="Your Restaurant"
            />
          </div>

          {/* Manager Name */}
          <div className="form-group">
            <label htmlFor="managerName" className="form-label">
              Manager Name
            </label>
            <input
              type="text"
              id="managerName"
              className="form-input"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="manager@restaurant.com"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Create a strong password"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Register Restaurant
          </button>

          {/* Form Footer */}
          <div className="form-footer">
            <p className="form-footer-text">
              Already a partner?{' '}
              <Link to="/food-partner/login" className="form-footer-link">
                Sign in
              </Link>
            </p>
            <p className="form-footer-text" style={{ marginTop: 'var(--spacing-md)' }}>
              Are you a customer?{' '}
              <Link to="/user/register" className="form-footer-link">
                Register as User
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FoodPartnerRegister

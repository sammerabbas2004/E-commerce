import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/theme.css'
import '../styles/auth.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FoodPartnerLogin = () => {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Collect form data
    const email = e.target.email.value;
    const password = e.target.password.value;
  // Send login request to backend
  const response = await axios.post("http://localhost:3000/api/auth/foodpartner/login", {
      email,
      password
    },{
      withCredentials: true
    });
    console.log(response.data)
    navigate("/create-food-item")// Redirect to home page after successful login
  };
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        {/* Header */}
        <div className="auth-header">
          <div className="auth-logo">👨‍🍳</div>
          <h1 className="auth-title">Partner Login</h1>
          <p className="auth-subtitle">Manage your restaurant account</p>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="form-group">
            <label htmlFor='email' className="form-label">Email Address</label>
            <div className="input-group">
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="partner@restaurant.com"
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor='password' className="form-label">Password</label>
            <div className="input-group">
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="form-group">
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="remember"
                className="checkbox-input"
              />
              <label htmlFor="remember" className="checkbox-label">
                Remember me
              </label>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div style={{ textAlign: 'right', marginBottom: 'var(--spacing-lg)' }}>
            <a href="#" className="form-footer-link">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>

          {/* Form Footer */}
          <div className="form-footer">
            <p className="form-footer-text">
              New restaurant partner?{' '}
              <Link to="/food-partner/register" className="form-footer-link">
                Register here
              </Link>
            </p>
            <p className="form-footer-text" style={{ marginTop: 'var(--spacing-md)' }}>
              Are you a customer?{' '}
              <Link to="/user/login" className="form-footer-link">
                Sign in as User
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FoodPartnerLogin

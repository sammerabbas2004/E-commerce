import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/theme.css'
import '../styles/auth.css'

const FoodPartnerRegister = () => {
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
        <form className="auth-form">
          {/* Restaurant Name */}
          <div className="form-group">
            <label className="form-label">Restaurant Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Your Restaurant"
            />
          </div>

          {/* Manager Name */}
          <div className="form-group">
            <label className="form-label">Manager Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-input"
              placeholder="manager@restaurant.com"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Create a strong password"
            />
          </div>

          {/* Terms & Conditions */}
          <div className="form-group">
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="terms"
                className="checkbox-input"
              />
              <label htmlFor="terms" className="checkbox-label">
                I agree to Partner Terms & Conditions
              </label>
            </div>
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

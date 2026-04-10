import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/theme.css'
import '../styles/auth.css'

const FoodPartnerLogin = () => {
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
        <form className="auth-form">
          {/* Email */}
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-group">
              <input
                type="email"
                className="form-input"
                placeholder="partner@restaurant.com"
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input
                type="password"
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

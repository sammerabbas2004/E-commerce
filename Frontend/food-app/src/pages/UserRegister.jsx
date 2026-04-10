import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/theme.css'
import '../styles/auth.css'

const UserRegister = () => {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        {/* Header */}
        <div className="auth-header">
          <div className="auth-logo">🍔</div>
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join us for delicious food delivery</p>
        </div>

        {/* Form */}
        <form className="auth-form">
          {/* Full Name */}
          <div className="form-group">
            <label className="form-label">Full Name</label>
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
              placeholder="you@example.com"
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
                I agree to Terms & Conditions
              </label>
            </div>
          </div>

          {/* Marketing */}
          <div className="form-group">
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="marketing"
                className="checkbox-input"
              />
              <label htmlFor="marketing" className="checkbox-label">
                Send me updates about offers
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>

          {/* Form Footer */}
          <div className="form-footer">
            <p className="form-footer-text">
              Already have an account?{' '}
              <Link to="/user/login" className="form-footer-link">
                Sign in
              </Link>
            </p>
            <p className="form-footer-text" style={{ marginTop: 'var(--spacing-md)' }}>
              Are you a restaurant?{' '}
              <Link to="/food-partner/register" className="form-footer-link">
                Register as Food Partner
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UserRegister

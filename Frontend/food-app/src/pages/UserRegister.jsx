import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/theme.css'
import '../styles/auth.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const UserRegister = () => {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Collect form data
    const fullName = e.target.fullName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
  // Send registration request to backend
  const response = await axios.post("http://localhost:3000/api/auth/user/register", {
      fullName,
      email,
      password
    },{
      withCredentials: true
    });
    console.log(response.data)
    navigate("/")
  };
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
        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor='fullName' className="form-label">Full Name</label>
            <input id="fullName"
              type="text"
              className="form-input"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor='email' className="form-label">Email Address</label>
            <input id="email"
              type="email"
              className="form-input"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor='password' className="form-label">Password</label>
            <input id="password"
              type="password"
              className="form-input"
              placeholder="Create a strong password"
            />
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

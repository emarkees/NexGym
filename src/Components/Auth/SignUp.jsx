import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import Modal from '../../Modal';

const CreateAccount = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    retypePassword: '',
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const {
      name, value, type, checked,
    } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Implement form validation logic here
    if (formData.password !== formData.retypePassword) {
      alert('Passwords do not match');
      return;
    }
    if (!formData.agreedToTerms) {
      alert('You must agree to the terms and conditions');
    }
    // Submit the form or call an API to create the account
  };

  return (
    <Modal onClose={onClose} className="modal__overlay">
      <div className="signup__container">
        <h1>Create Account</h1>
        <form onSubmit={handleSignUp}>
          <div className="signup__userName">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create Password"
            required
          />
          <input
            type="password"
            name="retypePassword"
            value={formData.retypePassword}
            onChange={handleChange}
            placeholder="Re-type Password"
            required
          />
          <div className="terms__container">
            <input
              type="checkbox"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="agreedToTerms">
              I agree to the Terms and Conditions
            </label>
          </div>
          <button type="submit" className="btn-secondary signup__signInButton">
            Create Account
          </button>
        </form>
        <Link to="/login" className="signup__registerButton">
          <span className="signup__registerButton">
            Already have an account? Sign In
          </span>
        </Link>
      </div>
    </Modal>
  );
};

export default CreateAccount;

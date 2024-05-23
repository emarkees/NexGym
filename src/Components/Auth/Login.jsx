import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onClose }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Implement your sign-in logic here
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user);
        navigate('/dashboard');
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="modal__overlay">
      <div className="login__container__head">
        <div className="login__container">
          <h1>Welcome to NExGym</h1>
          <form onSubmit={handleSignIn}>
            <i
              className="fa-solid fa-xmark fa-2x close__button"
              onClick={onClose}
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <button
              type="submit"
              className="btn-primary login__signInButton"
              onClick={signIn}
            >

              Sign In
            </button>
          </form>
          <p>Terms and Conditions</p>
          <Link to="/signUp">
            <span className="login__registerButton">Create Your Account</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

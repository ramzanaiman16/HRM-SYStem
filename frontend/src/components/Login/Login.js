import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { login, registrationForm } from '../../services/Apis';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../Login/login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === '') {
      toast.error('Email is required!');
    } else if (!email.includes('@')) {
      toast.error('Enter a valid email!');
    } else if (password === '') {
      toast.error('Password is required!');
    } else {
      try {
        const response = await login({ email, password });
        if (response.status === 200) {
          setEmail('');
          setPassword('');
          toast.success('Login successful!');
          localStorage.setItem('user' , JSON.stringify({email}))
          navigate('/'); // Redirect to home page after successful login
        } else if (response.status === 404 && response.data.message === 'user not registered') {
          // User not registered, redirect to registration form
          toast.error('User not registered. Please register first.');
          navigate('/register');
        } else {
          toast.error('Login failed. Please try again.');
        }
      } catch (error) {
        toast.error('An error occurred. Please try again.');
      }
    }

    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-form mt-5">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="btn-login">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
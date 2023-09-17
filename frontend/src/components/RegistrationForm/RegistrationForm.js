import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { registrationForm } from '../../services/Apis';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import '../RegistrationForm/registrationform.css'

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === '') {
      toast.error('Name is required!');
    } else if (email === '') {
      toast.error('Email is required!');
    } else if (!email.includes('@')) {
      toast.error('Enter a valid email!');
    } else if (password === '') {
      toast.error('Password is required!');
    } else {
      try {
        const response = await registrationForm({ name, email, password });
        if (response.status === 200) {
          setName('');
          setEmail('');
          setPassword('');
          toast.success('Registration successful!');
          navigate('/login');
        } 
        // else {
        //   toast.error('Registration failed. Please try again.');
        // }
      } catch (error) {
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="registration-form mt-5">
       <h2>Registration</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

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

        <Button variant="primary" type="submit" className="btn-register">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../../assets/css/Login.css';
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState('poorna@gmail.com');
  const [password, setPassword] = useState('1234');
  const [errors, setErrors]:any = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors:any = {};
    if (!email || !password) {
      newErrors.email = 'Please enter both email and password.';
    }
    return newErrors;
    // if (!email) newErrors.email = 'Email is required';
    // else if (!/S+@S+.S+/.test(email)) newErrors.email = 'Email is invalid';
    // if (!password) newErrors.password = 'Password is required';
    // else if (password.length < 3) newErrors.password = 'Invalid password';
    // return newErrors;
  };


  const handleSubmit = (event:any) => {
    event.preventDefault();
    const formErrors = validateForm();
    console.log({ email, password })
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      localStorage.setItem('showMenu', 'true');
      navigate("/dashboard", {state: {"isLogin": true}});
      console.log('Login attempted with:', { email, password });
    }
  };
  return (
    <div className="login-wrapper">
      <div className="login-form-container">
        <h2 className="login-title">Login</h2>
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" className="login-button">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}


export default Login;
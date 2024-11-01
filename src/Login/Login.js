import React, { useState } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
// import { Button, Input } from 'ripple-ui';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        const newErrors = {};

        if (!email) {
            newErrors.email = 'Email is required';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Submit form data if no errors
            console.log('Form submitted:', { email, password });
            // Perform login action here
        }


        // Basic validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) validationErrors.email = 'Invalid email format';
        if (!password) validationErrors.password = 'Password is required';

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Process login
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <Input
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                />
                <Input
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={errors.password}
                />
                <button class="btn btn-outline-secondary">Login</button>
            </form>
        </div>
    );
}

export default Login;
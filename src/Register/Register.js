import React, { useState } from 'react';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
// import { Button, Input } from 'ripple-ui';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        const newErrors = {};

        // Basic validation example
        if (!password) {
            newErrors.password = 'Password is required';
        }
        if (!confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password is required';
        } else if (confirmPassword !== password) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Submit form data if no errors
            console.log('Form submitted:', { password, confirmPassword });
            // Perform registration action here
        }


        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) validationErrors.email = 'Invalid email format';
        if (password !== confirmPassword) validationErrors.confirmPassword = 'Passwords do not match';

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Process registration
        }
    };

    return (
        <div className="register-container">
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
                <Input
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    error={errors.confirmPassword}
                />
                <button class="btn btn-outline-success">Register</button>
            </form>
        </div>
    );
}

export default Register;

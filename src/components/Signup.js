import React, { useState } from 'react';
import './LoginSignup.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        
        if (!username.match(/^[a-zA-Z0-9]{3,}$/)) {
            newErrors.username = 'Username must be at least 3 alphanumeric characters';
        }
        
        if (!phone.match(/^\d{10}$/)) {
            newErrors.phone = 'Phone number must be 10 digits';
        }
        
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsLoading(true);
        setErrors({});
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Signup submitted:', { username, email, phone, password });
        } catch (err) {
            setErrors({ form: 'Signup failed. Please try again.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-header">
                <h2>Create Account</h2>
                <p>Join our community today</p>
            </div>
            
            {errors.form && <div className="error-message">{errors.form}</div>}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="input-container">
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <label htmlFor="username" className={username ? 'filled' : ''}>Username</label>
                        {errors.username && <span className="field-error">{errors.username}</span>}
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-container">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="email" className={email ? 'filled' : ''}>Email</label>
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-container">
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <label htmlFor="phone" className={phone ? 'filled' : ''}>Phone Number</label>
                        {errors.phone && <span className="field-error">{errors.phone}</span>}
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-container">
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="password" className={password ? 'filled' : ''}>Password</label>
                    </div>
                </div>

                <div className="form-group">
                    <div className="input-container">
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="confirmPassword" className={confirmPassword ? 'filled' : ''}>Confirm Password</label>
                        {errors.confirmPassword && <span className="field-error">{errors.confirmPassword}</span>}
                    </div>
                </div>

                <button type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <div className="spinner"></div>
                    ) : (
                        'Sign Up'
                    )}
                </button>
            </form>

            <div className="login-footer">
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default Signup;

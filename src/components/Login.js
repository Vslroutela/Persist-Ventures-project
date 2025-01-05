import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log('Login submitted:', { email, password });
            // Redirect to main page after successful login
            navigate('/');
        } catch (err) {
            setError('Login failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-header">
                <h2>Welcome Back</h2>
                <p>Please login to your account</p>
            </div>
            
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
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
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="password" className={password ? 'filled' : ''}>Password</label>
                    </div>
                </div>

                <button type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <div className="spinner"></div>
                    ) : (
                        'Login'
                    )}
                </button>
            </form>

            <div className="login-footer">
                <p>Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
        </div>
    );
};

export default Login;

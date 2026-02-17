import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/localStorageHelper';
import CheckboxItem from '../../components/CheckboxItem';
import './style.css';

export default function Login() {
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            alert('Invalid email format');
            return;
        }

        if (password.length < 8) {
            alert('Password must be at least 8 characters');
            return;
        }

        const isLoginSuccessful = loginUser(email, password);

        if (!isLoginSuccessful) {
            alert('Invalid email or password');
            return;
        }

        navigate('/');
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <h1>Welcome Back</h1>
                    <p>Sign in to your account</p>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="your@email.com"
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="login-options">
                        <CheckboxItem
                            id="rememberMe"
                            name="rememberMe"
                            label="Remember me"
                        />
                        <a className="forgot-link">Forgot password?</a>
                    </div>

                    <button type="submit" className="login-button">
                        Sign In
                    </button>
                </form>

                <div className="login-footer">
                    <p>
                        Don't have an account? 
                        <a href="/register" className="register-link">Create one</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

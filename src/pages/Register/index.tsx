import { useNavigate } from 'react-router-dom';
import { saveUser, saveCurrentUserToken } from '../../services/localStorageHelper';
import CheckboxItem from '../../components/CheckboxItem';
import RadioGroup from '../../components/RadioGroup';
import './style.css';
import type { User } from '../../types/User';

export default function Register() {
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const fullName = formData.get('fullName') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirmPassword') as string;
        const gender = formData.get('gender') as string;
        const rememberMe = (formData.get('rememberMe') as string) === 'on';
        const agreeTerms = (formData.get('agreeTerms') as string) === 'on';
        const token = Math.random().toString(36).substring(2);

        if (!fullName.trim()) {
            alert('Full name is required');
            return;
        }

        if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) === null) {
            alert('Invalid email format! must have @ and .');
            return;
        }

        if (password.match(/^[0-9a-zA-Z]{8,16}$/) === null) {
            alert('Password must be at least 8 characters and contain only letters and numbers');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords don\'t match');
            return;
        }

        if (!gender) {
            alert('Please select your gender');
            return;
        }

        if (!agreeTerms) {
            alert('You must agree to terms and conditions');
            return;
        }

        const newUser: User = {
            id: Date.now(),
            name: fullName,
            email: email,
            password: password,
            rememberMe: rememberMe,
            state: gender,
            token: token,
            createdAt: new Date(),
            comments: []
        };

        saveUser(newUser);
        saveCurrentUserToken(newUser.token);

        navigate('/');
    }

    return (
        <div className="register-container">
            <div className="register-box">
                <div className="register-header">
                    <h1>Create Account</h1>
                    <p>Join our book community today</p>
                </div>

                <form onSubmit={handleSubmit} className="register-form">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            placeholder="John Doe"
                            className="form-input"
                            required
                        />
                    </div>

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
                        <p className="password-hint">At least 8 characters</p>
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            placeholder="••••••••"
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Gender</label>
                        <RadioGroup
                            name="gender"
                            options={[
                                { value: 'male', label: 'Male' },
                                { value: 'female', label: 'Female' }
                            ]}
                        />
                    </div>

                    <div className="form-group">
                        <CheckboxItem
                            id="rememberMe"
                            name="rememberMe"
                            label="Remember me"
                        />
                    </div>

                    <div className="form-group">
                        <CheckboxItem
                            id="agreeTerms"
                            name="agreeTerms"
                            label="I agree to the Terms of Service and Privacy Policy"
                        />
                    </div>

                    <button type="submit" className="register-button">
                        Create Account
                    </button>
                </form>

                <div className="register-footer">
                    <p>
                        Already have an account?
                        <a href="/login" className="login-link">Sign in</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

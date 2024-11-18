import { useState } from 'react';
import './ForgotPass.css'; // Ensure to import your CSS
import { Link } from 'react-router-dom';

const ForgotPass = () => {
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e :any) => {
        e.preventDefault();
        setError('');

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        console.log("Username:", username);
        console.log("New Password:", newPassword);
    };

    return (
        <div className="min-h-screen">
            <div className="absolute"></div>
            <div className="z-10">
                <div className="flex">
                    <h1 className="text-2xl">Reset Your Password</h1>
                </div>
                {error && <div className="bg-red-600">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="input-field"
                        required
                    />
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="input-field"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="input-field"
                        required
                    />
                    <button type="submit" className="btn">Submit</button>
                </form>
                <div className="text-center">
                    <p className="text-sm">
                        Remembered your password?   <Link to="/login" className="text-sm text-blue-900 hover:underline">
                        Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ForgotPass;

// ResetPassword.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import './Resetpass.css';

function ResetPassword() {
    const [searchParams] = useSearchParams();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }
        
        setIsLoading(true);
        const token = searchParams.get("token");
        try {
            const response = await axios.post(
                "http://localhost:8080/ResetPassword",
                { token, newPassword: password }
            );
            setMessage(response.data);
            // Redirect to login after successful reset
            setTimeout(() => navigate('/LoginSign'), 3000);
        } catch (error) {
            setMessage(error.response?.data || "An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="resetPasswordPage relative h-screen bg-sage-50 overflow-hidden">
            <div className="resetPasswordBlob1" />
            <div className="resetPasswordBlob2" />
            <div className="resetPasswordBlob3" />
            <div className="resetPasswordBlob4" />

            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    
                    <h2 className="resetPasswordTitle">
                        Reset Your Password
                    </h2>
                    <p className="resetPasswordSubtitle">
                        Please enter your new password
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="resetPasswordFormContainer">
                        {message && (
                            <div className={`resetPasswordMessage ${message.includes("error") || message.includes("not match") ? 
                                "resetPasswordErrorMessage" : 
                                "resetPasswordSuccessMessage"
                            }`}>
                                {message}
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="password" className="resetPasswordLabel">
                                    New Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="resetPasswordInput"
                                        placeholder="Enter your new password"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="confirmPassword" className="resetPasswordLabel">
                                    Confirm Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        type="password"
                                        required
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="resetPasswordInput"
                                        placeholder="Confirm your new password"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`resetPasswordSubmitButton ${isLoading ? 'resetPasswordLoading' : ''}`}
                                >
                                    {isLoading ? 'Resetting...' : 'Reset Password'}
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="resetPasswordDivider"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="text-center">
                                <p className="resetPasswordBackToSignIn">
                                    Back to{" "}
                                    <a href="/LoginSign" className="resetPasswordBackToSignInLink">
                                        Sign In
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;

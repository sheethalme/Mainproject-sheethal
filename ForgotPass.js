// ForgetPassword.js
import React, { useState } from "react";
import axios from "axios";
//import logo from '../assets/logo.png';
import './ForgotPass.css';

function ForgetPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post(
                "http://localhost:8080/forgot-password",
                { email }
            );
            setMessage(response.data);
        } catch (error) {
            setMessage(error.response?.data || "An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="forgetPasswordPage relative h-screen bg-sage-50 overflow-hidden">
            <div className="forgetPasswordBlob1" />
            <div className="forgetPasswordBlob2" />
            <div className="forgetPasswordBlob3" />
            <div className="forgetPasswordBlob4" />

            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    {/* //<img src={logo} alt="Your Company Name" className="forgetPasswordLogo" /> */}
                    <h2 className="forgetPasswordTitle">
                        Forgot Password?
                    </h2>
                    <p className="forgetPasswordSubtitle">
                        Enter your email address and we'll send you a reset link
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="forgetPasswordFormContainer">
                        {message && (
                            <div className={`forgetPasswordMessage ${message.includes("error") ? 
                                "forgetPasswordErrorMessage" : 
                                "forgetPasswordSuccessMessage"
                            }`}>
                                {message}
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="forgetPasswordLabel">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="forgetPasswordInput"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className={`forgetPasswordSubmitButton ${isLoading ? 'forgetPasswordLoading' : ''}`}
                                >
                                    {isLoading ? 'Sending...' : 'Send Reset Link'}
                                </button>
                            </div>
                        </form>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="forgetPasswordDivider"></div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="text-center">
                                <p className="forgetPasswordBackToSignIn">
                                    Remember your password?{" "}
                                    <a href="/LoginSign" className="forgetPasswordBackToSignInLink">
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

export default ForgetPassword;

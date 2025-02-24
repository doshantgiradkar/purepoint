import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-green-400">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-green-700 text-center">
          Forgot Password?
        </h2>
        <p className="text-sm text-gray-500 text-center mb-4">
          Enter your registered email to reset your password.
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email Address</label>
          <input
            type="email"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition ${
            email ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!email}
        >
          Send Reset Link
        </button>

        {/* Back to Login */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Remembered your password?{" "}
          <a href="/login" className="text-green-700 font-medium hover:underline">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword; 

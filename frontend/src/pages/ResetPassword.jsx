import React, { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [strength, setStrength] = useState("");

  // Function to check password strength
  const checkStrength = (pass) => {
    if (pass.length < 6) return "Weak";
    if (pass.match(/[A-Z]/) && pass.match(/[0-9]/) && pass.length >= 8)
      return "Strong";
    return "Medium";
  };

  // Handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setStrength(checkStrength(e.target.value));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-200 to-green-400">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-green-700 text-center">
          Reset Your Password
        </h2>
        <p className="text-sm text-gray-500 text-center mb-4">
          Enter a new password for your account.
        </p>

        {/* New Password Input */}
        <div className="mb-3">
          <label className="block text-gray-700 font-medium">New Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Enter new password"
            value={password}
            onChange={handlePasswordChange}
          />
          <p
            className={`text-sm mt-1 ${
              strength === "Weak"
                ? "text-red-500"
                : strength === "Medium"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            Strength: {strength}
          </p>
        </div>

        {/* Confirm Password Input */}
        <div className="mb-3">
          <label className="block text-gray-700 font-medium">Confirm Password</label>
          <input
            type="password"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:outline-none"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Reset Password Button */}
        <button
          className={`w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition ${
            password && confirmPassword && password === confirmPassword
              ? ""
              : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!password || !confirmPassword || password !== confirmPassword}
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;

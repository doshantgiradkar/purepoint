import React, { useState, useRef } from "react";
import axios from "axios";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async () => {
    setError(""); // Reset error before submission
    const otpCode = otp.join(""); // Convert array to string

    if (otpCode.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/verify-email",
        { code: otpCode },
        { withCredentials: true }
      );

      console.log("Verification successful:", response.data);
      alert("OTP Verified Successfully!");
    } catch (error) {
      console.error("Error verifying OTP:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-green-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-4">
          Verify OTP
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Enter the 6-digit OTP sent to your email.
        </p>

        {/* OTP Input Boxes */}
        <div className="flex justify-center gap-2 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-xl font-bold border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          ))}
        </div>

        {/* Error Message */}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}

        <button
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          onClick={handleSubmit}
        >
          Verify OTP
        </button>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Didn't receive OTP?{" "}
            <a href="#" className="text-green-600 hover:underline">
              Resend
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;

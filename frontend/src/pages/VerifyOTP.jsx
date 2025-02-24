import React, { useState, useRef } from "react";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-green-700 text-center mb-4">
          Verify OTP
        </h2>
        <p className="text-gray-600 text-center mb-4">
          Enter the 6-digit OTP sent to your email.
        </p>

        {/* OTP Input Boxes */}
        <div className="flex justify-center gap-2 mb-6">
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

        <button
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          onClick={() => alert("OTP Verified Successfully!")}
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

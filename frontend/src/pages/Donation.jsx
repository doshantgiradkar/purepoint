import React, { useState } from 'react';
import { Droplet, Shield, Check, Copy, QrCode, Sparkles } from 'lucide-react';
import { QRCode } from 'react-qr-code'; // Using react-qr-code instead of qrcode.react

const Confetti = () => {
  return (
    <div className="fixed inset-0 pointer-events-none flex justify-center">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-teal-400 rounded-full animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [qrLoading, setQrLoading] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const amounts = [
    { value: 10, impact: '4 people' },
    { value: 20, impact: '8 people' },
    { value: 40, impact: '12 people' },
    { value: 100, impact: '30 people' },
  ];

  const upiId = 'purepoint@upi';

  const validateAmount = (value) => {
    const amount = parseInt(value);
    if (!value) {
      setErrorMessage('Please enter an amount');
      return false;
    }
    if (isNaN(amount)) {
      setErrorMessage('Please enter a valid number');
      return false;
    }
    if (amount < 10) {
      setErrorMessage('Minimum donation is ₹10');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleGenerateQR = async () => {
    const amount = selectedAmount || customAmount;
    if (!validateAmount(amount)) return;

    setQrLoading(true);
    setTimeout(() => {
      setQrLoading(false);
      setShowQR(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }, 1500);
  };

  const copyUPI = () => {
    const textField = document.createElement('textarea');
    textField.innerText = upiId;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getPaymentURI = () => {
    const amount = selectedAmount || customAmount;
    return `upi://pay?pa=${upiId}&pn=PurePoint&am=${amount}&cu=INR`;
  };

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/homepage_image2.jpg" // Ensure this image exists in the public folder
          alt="Clean water impact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-teal-900/70 backdrop-blur-sm" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Message */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-400/20 rounded-full backdrop-blur-sm">
              <Sparkles className="h-5 w-5 text-teal-300" />
              <span className="text-teal-100">₹12,450 Raised So Far!</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Create a Cleaner, Greener Planet with PurePoint
            </h1>

            <div className="flex items-center gap-2 text-teal-100">
              <Droplet className="h-5 w-5" />
              <span>100% of Funds Go Directly to Waste Management Projects</span>
            </div>
          </div>

          {/* Right Column - Donation Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 relative overflow-hidden">
            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-3 text-lg font-medium">
                Choose your contribution amount
              </label>
              <div className="grid grid-cols-2 gap-3">
                {amounts.map(({ value, impact }) => (
                  <button
                    key={value}
                    onClick={() => {
                      setSelectedAmount(value);
                      setCustomAmount(value.toString());
                      setErrorMessage('');
                    }}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      selectedAmount === value
                        ? 'border-teal-500 bg-teal-50 text-teal-700 shadow-lg'
                        : 'border-gray-200 hover:border-teal-200'
                    }`}>
                    <div className="font-bold text-xl">₹{value}</div>
                    <div className="text-sm text-gray-600">Helps {impact}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <input
                type="number"
                placeholder="Enter custom amount (min ₹10)"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount(null);
                  validateAmount(e.target.value);
                }}
                className={`w-full p-4 rounded-xl border-2 transition-all ${
                  errorMessage
                    ? 'border-red-300 bg-red-50'
                    : 'border-gray-200 focus:border-teal-500'
                }`}
                min="10"
              />
              {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
            </div>

            {/* Generate QR Button */}
            <button
              onClick={handleGenerateQR}
              disabled={qrLoading || (!selectedAmount && !customAmount)}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 rounded-xl mb-6 transition-all flex items-center justify-center gap-2 disabled:opacity-70">
              {qrLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Generating QR Code...</span>
                </>
              ) : (
                <>
                  <QrCode className="h-5 w-5" />
                  <span>Generate Payment QR</span>
                </>
              )}
            </button>

            {/* QR Code Display */}
            {showQR && (
              <div className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-200 animate-fade-up">
                <div className="flex flex-col items-center gap-6">
                  <div className="p-4 bg-white rounded-lg shadow-lg">
                    <QRCode value={getPaymentURI()} size={192} level="H" fgColor="#0d9488" />
                  </div>

                  <button
                    onClick={copyUPI}
                    className="flex items-center gap-2 px-4 py-2 bg-teal-100 hover:bg-teal-200 text-teal-700 rounded-lg transition-all">
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" />
                        <span>UPI ID Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        <span>Copy UPI ID</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-6">
              <Shield className="h-4 w-4" />
              <span>Secure Payment • Protected by SSL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && <Confetti />}
    </div>
  );
};

export default Donation;

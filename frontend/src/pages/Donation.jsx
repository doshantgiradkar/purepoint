import { useState } from "react";
import { Leaf, Sparkles, TreePine, QrCode, Check, Copy } from "lucide-react";

const Confetti = () => {
  return (
    <div className="fixed inset-0 pointer-events-none flex justify-center">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-green-400 rounded-full
            animate-confetti-${i % 3 + 1}`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default function Donation() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [qrLoading, setQrLoading] = useState(false);
  const [showQR, setShowQR] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const amounts = [50, 100, 500, 1000];
  const upiId = "purepoint@upi";

  const validateAmount = (value) => {
    const amount = parseInt(value);
    if (!value) {
      setErrorMessage("");
      return false;
    }
    if (isNaN(amount) || amount < 10) {
      setErrorMessage("Minimum donation is ₹10");
      return false;
    }
    setErrorMessage("");
    return true;
  };

  const handleGenerateQR = async () => {
    if (!selectedAmount && !customAmount) {
      setErrorMessage("Please select or enter an amount");
      return;
    }

    setQrLoading(true);
    setTimeout(() => {
      setQrLoading(false);
      setShowQR(true);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }, 1500);
  };

  const copyUPI = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-grow flex min-h-screen p-4 sm:p-8">
      <section className="relative max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-green-100 shadow-xl dark:bg-green-800/30 dark:border-green-700/50 transition-all">
        {/* Decorative Elements */}
        <div className="absolute -top-3 -left-3 w-24 h-24 bg-green-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-emerald-100 rounded-full blur-3xl opacity-50 animate-pulse delay-700"></div>

        {/* Live Counter */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-green-400 to-emerald-400 text-white rounded-full text-sm shadow-lg flex items-center gap-2">
          <Sparkles size={16} className="animate-pulse" />
          <span className="font-medium">₹12,450 Planted!</span>
          <TreePine size={16} className="animate-bounce" />
        </div>

        {/* Amount Selection Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 mt-6">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => {
                setSelectedAmount(amount);
                setCustomAmount("");
              }}
              className={`relative p-4 rounded-2xl text-lg font-medium transition-all duration-300 group overflow-hidden ${
                selectedAmount === amount
                  ? "bg-gradient-to-br from-green-400 to-emerald-500 text-white scale-105 shadow-lg"
                  : "bg-green-50 text-green-600 hover:bg-green-100 dark:bg-green-800/30 dark:text-green-200"
              } hover:shadow-xl hover:-translate-y-1`}
            >
              <span className="relative z-10">₹{amount}</span>
              <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>

        {/* Custom Input */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="number"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
                validateAmount(e.target.value);
              }}
              placeholder="Other Amount (₹)"
              className={`w-full p-4 rounded-2xl border-2 bg-white/50 backdrop-blur-sm ${
                errorMessage
                  ? "border-red-300 animate-shake"
                  : "border-green-200 focus:border-green-400 dark:border-green-700"
              } focus:ring-4 focus:ring-green-200 dark:focus:ring-green-700/50 placeholder-green-500/50 text-green-700 dark:text-green-100 transition-all`}
            />
            {errorMessage && (
              <p className="absolute -bottom-6 left-0 text-red-500 text-sm mt-2 flex items-center gap-1">
                ⚠️ {errorMessage}
              </p>
            )}
          </div>
        </div>

        {/* QR Code Actions */}
        <div className="space-y-6">
          <button
            onClick={handleGenerateQR}
            disabled={qrLoading}
            className="w-full py-4 px-8 rounded-2xl text-white font-medium bg-gradient-to-br from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {qrLoading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Creating Magic...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <QrCode size={20} />
                <span>Generate QR Code</span>
              </div>
            )}
          </button>

          {showQR && (
            <div className="p-8 rounded-2xl bg-white/60 backdrop-blur-xl border border-green-100 dark:bg-green-800/30 dark:border-green-700/50 shadow-xl transition-all animate-fade-up">
              <div className="flex flex-col items-center gap-6">
                <div className="p-4 bg-white rounded-xl shadow-lg">
                  <img
                    src="/api/placeholder/200/200"
                    alt="QR Code"
                    className="w-48 h-48"
                  />
                </div>
                <button
                  onClick={copyUPI}
                  className="px-4 py-2 rounded-xl bg-green-100 hover:bg-green-200 dark:bg-green-700/30 text-green-600 dark:text-green-200 font-medium transition-all hover:shadow-md flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check size={16} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy UPI ID</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Floating Leaves */}
        <div className="absolute -top-20 -left-20 w-40 h-40 text-green-400/20 animate-float">
          <Leaf className="w-full h-full" />
        </div>
        <div className="absolute -bottom-16 -right-20 w-40 h-40 text-green-400/20 animate-float-delayed">
          <Leaf className="w-full h-full" />
        </div>

        {/* Confetti Effect */}
        {showConfetti && <Confetti />}
      </section>
    </div>
  );
}
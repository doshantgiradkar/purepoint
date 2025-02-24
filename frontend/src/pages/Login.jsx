import { useState } from 'react';
import { ArrowRight, Mail, Lock, UserCircle } from 'lucide-react';
import { useGlobalContext } from '../../hooks/useGlobalContext';

const LoginPage = () => {
  const { login } = useGlobalContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    setIsLoading(true);
  
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating delay
  
      // Call login function from GlobalContext
      await login({email, password}); // Make sure `email` & `password` are properly stored in state
  
      console.log("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
    
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8 transform transition-all duration-300 hover:scale-[1.02]">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Welcome Back</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="email"
              value={email}
              name='password'
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="password"
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-emerald-600 transform transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Login
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?{' '}
          <a href="/signup" className="text-green-600 hover:text-emerald-600 transition-colors duration-300">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import FloatingButton from "./components/Floating";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <FloatingButton />
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center">
        <SignedOut>
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
              Welcome to PurePoint! ✨
            </h1>
            <SignInButton mode="modal">
              <button className="bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 text-white px-8 py-4 rounded-full text-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                Get Started Now 🚀
              </button>
            </SignInButton>
          </div>
        </SignedOut>

        <SignedIn>
          <Outlet />
        </SignedIn>
      </main>

      <Footer />
    </div>
  );
};

export default App;

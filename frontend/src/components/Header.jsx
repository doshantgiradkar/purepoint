import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Trophy,
  FileText,
  Info,
  Mail,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
  Leaf,
} from "lucide-react";
import FloatingButton from "./Floating";
import { UserButton } from "@clerk/clerk-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMenuOpen(false);
      setIsProfileMenuOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navigationLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
    { href: "/complaints", label: "Complaints", icon: FileText },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const profileMenuItems = [
    { label: "Profile", href: "/profile/nfg", icon: User },
    { label: "Settings", href: "/settings", icon: Settings },
    { label: "Logout", href: "#", icon: LogOut },
  ];

  // Prevent click propagation for menu buttons
  const handleMenuClick = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfileClick = (e) => {
    e.stopPropagation();
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className="bg-white">
      <nav className="fixed top-0 w-full z-50 bg-green-700 dark:bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <Leaf className="h-8 w-8 text-green-600" />
                <span className="font-bold text-lg sm:text-xl text-white">
                  PurePoint
                </span>
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-1 md:space-x-4">
              {navigationLinks.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  to={href}
                  className="flex items-center space-x-1 px-3 py-2 text-sm text-white rounded-md hover:bg-green-600 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4">
              
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <Link
                    to="/login"
                    className="text-sm sm:text-base text-white hover:text-gray-200"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-green-700 font-semibold rounded-md hover:bg-gray-100"
                  >
                    Sign Up
                  </Link>
                </div>

              <button
                onClick={handleMenuClick}
                className="lg:hidden p-2 rounded-md hover:bg-green-600"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden border-t border-green-600">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationLinks.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    to={href}
                    className="flex items-center space-x-2 px-3 py-2 text-base text-white rounded-md hover:bg-green-600"
                  >
                    <Icon className="w-5 h-5" />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;

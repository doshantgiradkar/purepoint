import { useState, useEffect } from "react";
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMenuOpen(false);
      setIsProfileMenuOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const navigationLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
    { href: "/complaints", label: "Complaints", icon: FileText },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const profileMenuItems = [
    { label: "Profile", icon: User },
    { label: "Settings", icon: Settings },
    { label: "Logout", icon: LogOut },
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
    <header className='bg-white'>
    <nav className="fixed top-0 w-full z-50 bg-green-700 dark:bg-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar Content */}
        <div className="flex items-center justify-between h-16">
          {/* Logo - Smaller on mobile */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="font-bold text-lg sm:text-xl text-white">
                PurePoint
              </span>
            </a>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-1 md:space-x-4">
            {navigationLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="flex items-center space-x-1 px-3 py-2 text-sm text-white rounded-md hover:bg-green-600 transition-colors duration-200"
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">

            {/* Auth Buttons / Profile */}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={handleProfileClick}
                  className="flex items-center space-x-2"
                >
                  <img
                    src="/api/placeholder/32/32"
                    alt="Profile"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </button>

                {/* Profile Dropdown - Positioned better for mobile */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-green-800 rounded-lg shadow-lg py-2 origin-top-right">
                    {profileMenuItems.map(({ label, icon: Icon }) => (
                      <a
                        key={label}
                        href="#"
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-green-700"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{label}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2 sm:space-x-4">
                <a
                  href="/login"
                  className="text-sm sm:text-base text-white hover:text-gray-200"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 bg-white text-green-700 font-semibold rounded-md hover:bg-gray-100"
                >
                  Sign Up
                </a>
              </div>
            )}

            {/* Mobile Menu Button */}
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

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-green-600">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  className="flex items-center space-x-2 px-3 py-2 text-base text-white rounded-md hover:bg-green-600"
                >
                  <Icon className="w-5 h-5" />
                  <span>{label}</span>
                </a>
              ))}
              
              {/* Dark mode toggle in mobile menu */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="sm:hidden w-full flex items-center space-x-2 px-3 py-2 text-base text-white rounded-md hover:bg-green-600"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-5 h-5" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
    </header>
  );
};

export default Header;
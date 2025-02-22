import React, { useState } from 'react';
import {
  Home,
  Info,
  Star,
  PlayCircle,
  Mail,
  Shield,
  MapPin,
  Phone,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-b from-green-800 to-green-900 text-white">
      {/* Wavy Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
        <svg className="relative w-full h-12" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img src="/api/placeholder/48/48" alt="PurePoint Logo" className="h-12 w-12" />
              <span className="text-2xl font-bold">PurePoint</span>
            </div>
            <p className="text-green-100">Together, We Make a Difference!</p>
            <p className="text-sm text-green-200">© 2025 PurePoint. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { icon: Home, text: 'Home' },
                { icon: Info, text: 'About' },
                { icon: Star, text: 'Features' },
                { icon: PlayCircle, text: 'How It Works' },
                { icon: Mail, text: 'Contact' },
                { icon: Shield, text: 'Privacy Policy' }
              ].map(({ icon: Icon, text }) => (
                <li key={text}>
                  <a href="#" className="flex items-center space-x-2 text-green-100 hover:text-white transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                    <span>{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <MapPin className="w-5 h-5 text-green-300 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-green-100">New York, USA</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-5 h-5 text-green-300 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-green-100">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail className="w-5 h-5 text-green-300 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-green-100">support@purepoint.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Linkedin, href: '#' }
                ].map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-green-700 hover:bg-green-600 transition-all duration-300 hover:shadow-glow"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to stay updated"
                  className="w-full px-4 py-3 bg-green-700 text-white placeholder-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-200 hover:text-white transition-colors duration-300"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>

            {/* CTA Section */}
            <div className="mt-8 space-y-4">
              <p className="text-green-100">Join us in making our cities cleaner! Be a part of the change.</p>
              <button className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg transition-colors duration-300">
                <span>Get Involved</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  MessageCircle,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Clock
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [showChat, setShowChat] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative min-h-screen bg-white mt-2">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch with Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question, feedback, or partnership proposal? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all hover:shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Support">Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-6 flex items-center justify-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              <span>We usually respond within 24 hours!</span>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-600">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>New York, USA</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-600">
                  <Mail className="w-5 h-5 text-green-600" />
                  <span>support@purepoint.com</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-green-600 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-xl shadow-lg p-2 h-64">
              <img 
                src="/api/placeholder/600/300" 
                alt="Google Maps Location" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Live Chat Button */}
      <button 
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transform hover:-translate-y-1 transition-all"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Contact;
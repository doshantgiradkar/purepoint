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
  Clock,
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full relative min-h-screen bg-gray-50">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 relative mt-18">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get in Touch with Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question, feedback, or partnership proposal? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-10 transform transition-all hover:shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all">
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Support">Support</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="Write your message here..."
                  required></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-4 rounded-xl hover:bg-green-700 transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-3">
                <Send className="w-6 h-6" />
                <span className="text-lg">Send Message</span>
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center text-lg text-gray-500">
              <Clock className="w-5 h-5 mr-2" />
              <span>We usually respond within 24 hours!</span>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-gray-700">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <span className="text-lg">New York, USA</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-700">
                  <Phone className="w-6 h-6 text-green-600" />
                  <span className="text-lg">+1 234 567 890</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-700">
                  <Mail className="w-6 h-6 text-green-600" />
                  <span className="text-lg">support@purepoint.com</span>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
                <div className="flex space-x-8">
                  <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                    <Linkedin className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                    <Twitter className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                    <Instagram className="w-8 h-8" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                    <Facebook className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183792036036!2d-73.9854286845936!3d40.74844047932882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1633023226787!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Send,
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
    <div className="w-full relative min-h-screen bg-gray-50 flex items-center justify-center p-6 mt-20">
      <div className="max-w-7xl w-full bg-white shadow-2xl rounded-3xl p-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 mb-8">
            We'd love to hear from you! Fill out the form and we'll get back to you soon.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500">
                <option value="General Inquiry">General Inquiry</option>
                <option value="Support">Support</option>
                <option value="Partnership">Partnership</option>
                <option value="Feedback">Feedback</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Your Message"
                required></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 flex items-center justify-center gap-3">
              <Send className="w-5 h-5" /> Send Message
            </button>
          </form>
          <div className="mt-6 flex items-center text-gray-600">
            <Clock className="w-5 h-5 mr-2" />
            <span>We typically respond within 24 hours.</span>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="space-y-8">
          <div className="bg-gray-100 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Info</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-700">
                <MapPin className="w-6 h-6 text-green-600" />
                <span>New York, USA</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <Phone className="w-6 h-6 text-green-600" />
                <span>+1 234 567 890</span>
              </div>
              <div className="flex items-center gap-4 text-gray-700">
                <Mail className="w-6 h-6 text-green-600" />
                <span>support@purepoint.com</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-green-600">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                <Twitter className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                <Instagram className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600">
                <Facebook className="w-7 h-7" />
              </a>
            </div>
          </div>
          {/* Google Maps Embed */}
          <div className="bg-gray-100 rounded-xl overflow-hidden p-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183792036036!2d-73.9854286845936!3d40.74844047932882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1633023226787!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowRight, Leaf } from "lucide-react";
import "swiper/css";

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-green-100 px-6 py-16 md:py-24">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-green-200/30" />
          <div className="absolute -left-1/4 -bottom-1/4 h-96 w-96 rounded-full bg-orange-200/20" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
            {/* Content Column */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-1/2">
              {/* Logo/Brand Section */}
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
                <span className="text-xl font-semibold text-green-800">PurePoint</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl font-bold tracking-tight text-green-900 md:text-5xl lg:text-6xl">
                A Smarter Way to
                <span className="block text-green-600">Manage Waste</span>
              </h1>

              {/* Subheading */}
              <p className="mt-6 text-lg text-gray-600 md:text-xl">
                Report. Track. Clean. Together, we're building a cleaner, more sustainable future
                for our communities.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <button className="group flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg">
                  Get Started
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-green-600 shadow-md transition-all hover:bg-green-50 hover:shadow-lg border border-green-200">
                  Make a Donation
                </button>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:w-5/12">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/50 blur-xl rounded-full" />
                <img
                  src="/api/placeholder/600/400"
                  alt="Environmental cleanup team"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 text-center bg-white shadow-md">
        {[
          { label: 'Presence in Cities', value: '50+' },
          { label: 'Active Users', value: '100K+' },
          { label: 'Registered Authorities', value: '5,000+' },
          { label: 'Resolved Complaints', value: '200K+' },
        ].map((stat, i) => (
          <div key={i} className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-green-700">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* How It Works Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-gray-50">
        <img
          src="/how-it-works.jpg"
          alt="How It Works"
          className="w-full md:w-1/3 rounded-lg shadow-md mb-6 md:mb-0"
        />
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-green-800 mb-4">How It Works</h2>
          <ol className="list-decimal pl-6 text-gray-700 text-lg">
            <li>Report garbage issues with location and images.</li>
            <li>Assigned authorities take action to clean the area.</li>
            <li>Track progress and rate the service provided.</li>
            <li>Earn rewards and recognition for your contributions.</li>
          </ol>
        </div>
      </section>

      {/* Top Contributors & Authorities Section */}
      <section className="p-8 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">Top Contributors & Best Authorities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
              <img src="/user.jpg" alt="User" className="w-16 h-16 rounded-full mx-auto" />
              <h3 className="text-xl font-semibold mt-4">User {i + 1}</h3>
              <p className="text-gray-600">Resolved 100+ complaints</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
        <Swiper spaceBetween={30} slidesPerView={1} className="w-full md:w-2/3 mx-auto">
          {['Amazing platform!', 'Made our city cleaner!', 'Highly recommended!'].map(
            (quote, i) => (
              <SwiperSlide key={i} className="text-center bg-white p-6 rounded-lg shadow">
                <p className="text-lg italic">"{quote}"</p>
                <p className="font-semibold mt-2">- User {i + 1}</p>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </section>
    </div>
  );
};

export default Home;

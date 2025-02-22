import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-green-50">
        <div className="text-center md:text-left md:w-1/2">
          <h2 className="text-3xl md:text-5xl font-bold text-green-800">
            PurePoint – A Smarter Way to Manage Waste
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mt-2">
            Report. Track. Clean. Together, We Make a Difference!
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition">
              Get Started
            </button>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition">
              Donate
            </button>
          </div>
        </div>
        <img src="/cleaners.jpg" alt="Cleaners" className="w-full md:w-1/3 rounded-lg shadow-md mt-6 md:mt-0" />
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 text-center bg-white shadow-md">
        {[
          { label: "Presence in Cities", value: "50+" },
          { label: "Active Users", value: "100K+" },
          { label: "Registered Authorities", value: "5,000+" },
          { label: "Resolved Complaints", value: "200K+" },
        ].map((stat, i) => (
          <div key={i} className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-3xl font-bold text-green-700">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* How It Works Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-gray-50">
        <img src="/how-it-works.jpg" alt="How It Works" className="w-full md:w-1/3 rounded-lg shadow-md mb-6 md:mb-0" />
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
        <h2 className="text-3xl font-bold text-center mb-6">
          Top Contributors & Best Authorities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition text-center"
            >
              <img
                src="/user.jpg"
                alt="User"
                className="w-16 h-16 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">User {i + 1}</h3>
              <p className="text-gray-600">Resolved 100+ complaints</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="w-full md:w-2/3 mx-auto"
        >
          {["Amazing platform!", "Made our city cleaner!", "Highly recommended!"].map(
            (quote, i) => (
              <SwiperSlide key={i} className="text-center bg-white p-6 rounded-lg shadow">
                <p className="text-lg italic">"{quote}"</p>
                <p className="font-semibold mt-2">- User {i + 1}</p>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </section>
    </div>
  );
};

export default Home;

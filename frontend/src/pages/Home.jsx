import { Link } from 'react-router-dom';
// import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from 'react';
import {
  ArrowRight,
  Leaf,
  Award,
  CheckCircle,
  Users,
  Building2,
  Trophy,
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
} from 'lucide-react';
import 'swiper/css';

const Home = ({isLoggedIn}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const stats = [
    { label: 'Presence in Cities', value: '50+', icon: Building2 },
    { label: 'Active Users', value: '100K+', icon: Users },
    { label: 'Registered Authorities', value: '5,000+', icon: CheckCircle },
    { label: 'Resolved Complaints', value: '200K+', icon: Trophy },
  ];

  const steps = [
    {
      text: 'Report garbage issues with location and images',
      desc: 'Easy reporting through our mobile app',
    },
    {
      text: 'Assigned authorities take action to clean the area',
      desc: 'Quick response from local teams',
    },
    {
      text: 'Track progress and rate the service provided',
      desc: 'Real-time updates and feedback',
    },
    {
      text: 'Earn rewards and recognition for contributions',
      desc: 'Get points and community badges',
    },
  ];

  const testimonials = [
    {
      quote:
        'PurePoint has transformed how we handle waste management in our community. The app is intuitive, and the response time is incredible!',
      author: 'Sarah Martinez',
      role: 'Community Leader',
      rating: 5,
      location: 'San Francisco',
    },
    {
      quote:
        'Thanks to PurePoint, our neighborhood is noticeably cleaner. The reward system keeps everyone motivated to participate!',
      author: 'Michael Chen',
      role: 'Resident',
      rating: 5,
      location: 'Boston',
    },
    {
      quote:
        'As a local authority, this platform has streamlined our waste management process. The real-time reporting is a game-changer.',
      author: 'David Thompson',
      role: 'City Official',
      rating: 5,
      location: 'Chicago',
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-green-50 to-green-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl overflow-hidden bg-gradient-to-br from-green-50 to-green-100 px-6 py-16 md:py-24 h-fit mt-16">
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
                {isLoggedIn ? (
                  <Link
                    to="/report"
                    className="group flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:cursor-pointer">
                    Report
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <Link
                    to="/signup"
                    className="group flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-green-700 hover:shadow-lg hover:cursor-pointer">
                    Get Started
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
                <Link
                  to="/donation"
                  className="rounded-full bg-white px-8 py-4 text-lg font-semibold text-green-600 shadow-md transition-all hover:bg-green-50 hover:shadow-lg border border-green-200">
                  Make a Donation
                </Link>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:w-5/12">
              <div className="relative">
                <div className="absolute -inset-4 bg-white/50 blur-xl rounded-full" />
                <img
                  src="/homepage_image2.jpg"
                  alt="Environmental cleanup team"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-white p-8 shadow-lg transition-all hover:shadow-xl">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-green-100 opacity-50 transition-transform group-hover:scale-150" />
                <div className="relative">
                  <stat.icon className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-4xl font-bold text-green-800">{stat.value}</h3>
                  <p className="mt-2 text-base text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-green-100/50 blur-2xl rounded-full" />
                <img
                  src="/how_it_works.jpg"
                  alt="How It Works"
                  className="relative rounded-2xl shadow-xl"
                />
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-green-800 mb-8">How It Works</h2>
              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 font-semibold">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{step.text}</h3>
                      <p className="mt-1 text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800">Our Top Contributors</h2>
            <p className="mt-4 text-xl text-gray-600">Making a difference in our communities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-white p-8 text-center transition-all hover:shadow-xl">
                <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-orange-100 opacity-30 transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="inline-block rounded-full p-1 bg-gradient-to-br from-green-200 to-green-100">
                    <img
                      src="/sara_johnson.jpeg"
                      alt={`Contributor ${i + 1}`}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-900">Sarah Johnson</h3>
                  <p className="mt-2 text-gray-600">Environmental Champion</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Award className="h-5 w-5 text-green-600" />
                    <span className="text-green-600 font-medium">100+ issues resolved</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800">What Our Users Say</h2>
            <p className="mt-4 text-xl text-gray-600">Real stories from our community members</p>
          </div>

          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -left-4 top-0 h-40 w-40 rounded-full bg-green-100 opacity-30" />
            <div className="absolute -right-4 bottom-0 h-40 w-40 rounded-full bg-orange-100 opacity-30" />

            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <Quote className="h-12 w-12 text-green-200 mb-8" />

              <div className="max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-700 italic text-center">
                  "{testimonials[currentIndex].quote}"
                </p>

                <div className="mt-8 flex flex-col items-center">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-lg font-semibold text-gray-900">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
                  aria-label="Previous testimonial">
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-colors"
                  aria-label="Next testimonial">
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      i === currentIndex ? 'bg-green-600' : 'bg-green-200'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

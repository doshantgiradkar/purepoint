import {
  MapPin,
  Send,
  CheckCircle,
  Star,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative flex flex-col items-center p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#008236]" />
      <div className="text-[#008236] transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-gray-800 tracking-tight">{title}</h3>
      <p className="mt-3 text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  );
}

function ProcessStep({ icon, title, description, index }) {
  return (
    <div className="relative flex flex-col items-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#008236]" />
      {/* <div className="absolute -left-6 top-8 w-4 h-4 rounded-full bg-[#008236]" /> */}
      <div className="text-[#008236] mb-5">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3 tracking-tight">{title}</h3>
      <p className="text-gray-600 text-center leading-relaxed">{description}</p>
    </div>
  );
}

export default function AboutPurePoint() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl py-24 px-6 sm:px-8 lg:px-12 mt-16">
        {/* Header */}
        <div className="relative text-center max-w-4xl mx-auto">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#008236]" />
          <h1 className="inline-block text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
            <span className="text-[#0D542B]">Pure</span>
            <span className="text-[#008236]">Point</span>
          </h1>
          <div className="mt-8 relative">
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-light">
              A <span className="text-[#008236] font-medium">smart garbage complaint</span>{' '}
              management system for{' '}
              <span className="relative">
                <span className="relative z-10">cleaner communities</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-[#EAFDF0] -z-10" />
              </span>
            </p>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#008236] opacity-50" />
          </div>
        </div>

        {/* Solution Summary */}
        <div className="mt-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#0D542B] tracking-tight">Solution Summary</h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            PurePoint empowers citizens to report waste issues efficiently. Our system ensures
            seamless complaint resolution with
            <span className="font-medium text-[#008236]">
              {' '}
              geolocation-based tracking, smart assignment, and real-time updates
            </span>
            .
          </p>
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold text-[#0D542B] text-center mb-12 tracking-tight">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <ProcessStep
              icon={<Send size={36} />}
              title="Easy Complaint Submission"
              description="Upload an image with a description. The system captures geolocation automatically."
              index={1}
            />
            <ProcessStep
              icon={<MapPin size={36} />}
              title="Smart Assignment"
              description="Complaints are assigned to the nearest waste management authority for prompt action."
              index={2}
            />
            <ProcessStep
              icon={<CheckCircle size={36} />}
              title="Verified Cleanup"
              description="Authorities upload an 'after cleanup' image to confirm resolution."
              index={3}
            />
          </div>
        </div>

        {/* Key Features & Benefits */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold text-[#0D542B] text-center mb-12 tracking-tight">
            Key Features & Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<TrendingUp size={32} />}
              title="Fast & Transparent"
              description="Seamless reporting with real-time tracking at every stage."
            />
            <FeatureCard
              icon={<MapPin size={32} />}
              title="Geolocation-Based"
              description="Automatic assignment ensures quicker response times."
            />
            <FeatureCard
              icon={<Star size={32} />}
              title="Gamification"
              description="Earn points, badges & appear on leaderboards to stay engaged."
            />
            <FeatureCard
              icon={<AlertTriangle size={32} />}
              title="Accountability"
              description="Track authority performance with ratings & escalation mechanisms."
            />
            <FeatureCard
              icon={<CheckCircle size={32} />}
              title="Community-Driven"
              description="Encourages citizens to take responsibility for a cleaner environment."
            />
            <FeatureCard
              icon={<Send size={32} />}
              title="Data Insights"
              description="Authorities gain access to complaint trends for better resource allocation."
            />
          </div>
        </div>

        {/* Why PurePoint? */}
        <div className="mt-24 max-w-5xl mx-auto">
          <div className="bg-[#EAFDF0] p-10 rounded-2xl">
            <h2 className="text-3xl font-semibold text-[#0D542B] text-center tracking-tight">
              Why PurePoint?
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed text-center">
              Traditional complaint systems are slow and bureaucratic.
              <span className="font-medium text-[#008236]">
                {' '}
                PurePoint leverages modern technology
              </span>{' '}
              with OpenStreetMap, MongoDB, Cloudinary, and scalable cloud deployment to ensure
              <span className="font-medium text-[#008236]">
                {' '}
                real-time tracking, gamification, and active citizen engagement
              </span>
              .
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold text-[#0D542B] tracking-tight">
            Join Us in Creating a Cleaner Future
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            Make an impact today! Report garbage and keep your city clean. 🌿
          </p>
          <a
            href="/report"
            className="mt-8 inline-flex items-center px-8 py-4 rounded-xl bg-[#008236] hover:bg-[#0D542B] text-white text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
            Report Now
            <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}

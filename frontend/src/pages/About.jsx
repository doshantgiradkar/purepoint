import { MapPin, Send, CheckCircle, Star, TrendingUp, AlertTriangle } from "lucide-react";

export default function AboutPurePoint() {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 sm:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-green-700">About PurePoint</h1>
        <p className="mt-4 text-lg text-gray-600">
          A smart garbage complaint management system for cleaner communities.
        </p>
      </div>

      {/* Solution Summary */}
      <div className="mt-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-800">Solution Summary</h2>
        <p className="mt-4 text-lg text-gray-700">
          PurePoint is a technology-driven platform that empowers citizens to report waste issues efficiently. 
          Our system ensures seamless complaint resolution with **geolocation-based tracking, smart assignment, and real-time updates**.
        </p>
      </div>

      {/* How It Works */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-800 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
            <Send className="text-green-600 text-5xl" />
            <h3 className="mt-4 text-xl font-semibold">Easy Complaint Submission</h3>
            <p className="text-gray-700 text-center">
              Upload an image with a description. The system captures geolocation automatically.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
            <MapPin className="text-green-600 text-5xl" />
            <h3 className="mt-4 text-xl font-semibold">Smart Assignment</h3>
            <p className="text-gray-700 text-center">
              Complaints are assigned to the nearest waste management authority for prompt action.
            </p>
          </div>
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
            <CheckCircle className="text-green-600 text-5xl" />
            <h3 className="mt-4 text-xl font-semibold">Verified Cleanup</h3>
            <p className="text-gray-700 text-center">
              Authorities upload an "after cleanup" image to confirm resolution.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features & Benefits */}
      <div className="mt-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-green-800 text-center">Key Features & Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <FeatureCard icon={<TrendingUp />} title="Fast & Transparent" description="Seamless reporting with real-time tracking at every stage." />
          <FeatureCard icon={<MapPin />} title="Geolocation-Based Handling" description="Automatic assignment ensures quicker response times." />
          <FeatureCard icon={<Star />} title="Gamification" description="Earn points, badges & appear on leaderboards to stay engaged." />
          <FeatureCard icon={<AlertTriangle />} title="Accountability & Escalation" description="Track authority performance with ratings & escalation mechanisms." />
          <FeatureCard icon={<CheckCircle />} title="Community-Driven Cleanliness" description="Encourages citizens to take responsibility for a cleaner environment." />
          <FeatureCard icon={<Send />} title="Data Insights & Analytics" description="Authorities gain access to complaint trends for better resource allocation." />
        </div>
      </div>

      {/* Why PurePoint? */}
      <div className="mt-16 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-green-800">Why PurePoint?</h2>
        <p className="mt-4 text-lg text-gray-700">
          Traditional complaint systems are slow and bureaucratic. **PurePoint leverages modern technology** with 
          OpenStreetMap, MongoDB, Cloudinary, and scalable cloud deployment to ensure **real-time tracking, 
          gamification, and active citizen engagement**.
        </p>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-green-800">Join Us in Creating a Cleaner Future</h2>
        <p className="mt-4 text-lg">Make an impact today! Report garbage and keep your city clean. 🚮</p>
        <a
          href="/report"
          className="mt-6 inline-block px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white text-lg font-semibold transition-all shadow-lg"
        >
          Report Now
        </a>
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-xl shadow-md">
      <div className="text-green-600 text-5xl">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="text-gray-700 text-center">{description}</p>
    </div>
  );
}

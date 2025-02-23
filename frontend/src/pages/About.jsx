import { 
  MapPin, 
  Send, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  AlertTriangle, 
  ArrowRight
} from "lucide-react";

// Feature Card Component with enhanced styling
function FeatureCard({ icon, title, description }) {
  return (
    <div className="group flex flex-col items-center p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-t-4 border-green-500">
      <div className="text-green-600 transform group-hover:scale-110 transition-transform duration-300 text-3xl">
        {icon}
      </div>
      <h3 className="mt-4 text-xl font-bold text-gray-800">
        {title}
      </h3>
      <p className="mt-2 text-gray-600 text-center">
        {description}
      </p>
    </div>
  );
}

// Process Step Component
function ProcessStep({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
      <div className="text-green-600 text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-center">
        {description}
      </p>
    </div>
  );
}

export default function AboutPurePoint() {
  return (
    <div className="min-h-screen bg-gray-100">
      <section className="py-16 px-6 sm:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-green-600">
            About PurePoint
          </h1>
          <p className="mt-6 text-xl text-gray-700">
            A smart garbage complaint management system for cleaner communities.
          </p>
        </div>

        {/* Solution Summary */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-green-700">
            Solution Summary
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            PurePoint empowers citizens to report waste issues efficiently. 
            Our system ensures seamless complaint resolution with 
            <span className="font-semibold text-green-700">
              {" "}geolocation-based tracking, smart assignment, and real-time updates
            </span>.
          </p>
        </div>

        {/* How It Works */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold text-green-700 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep
              icon={<Send />}
              title="Easy Complaint Submission"
              description="Upload an image with a description. The system captures geolocation automatically."
            />
            <ProcessStep
              icon={<MapPin />}
              title="Smart Assignment"
              description="Complaints are assigned to the nearest waste management authority for prompt action."
            />
            <ProcessStep
              icon={<CheckCircle />}
              title="Verified Cleanup"
              description="Authorities upload an 'after cleanup' image to confirm resolution."
            />
          </div>
        </div>

        {/* Key Features & Benefits */}
        <div className="mt-24">
          <h2 className="text-3xl font-semibold text-green-700 text-center mb-12">
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
        <div className="mt-24 max-w-5xl mx-auto text-center bg-white p-10 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-semibold text-green-700">
            Why PurePoint?
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Traditional complaint systems are slow and bureaucratic. 
            <span className="font-semibold text-green-700">
              {" "}PurePoint leverages modern technology
            </span>{" "}
            with OpenStreetMap, MongoDB, Cloudinary, and scalable cloud deployment to ensure 
            <span className="font-semibold text-green-700">
              {" "}real-time tracking, gamification, and active citizen engagement
            </span>.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-semibold text-green-700">
            Join Us in Creating a Cleaner Future
          </h2>
          <p className="mt-4 text-xl text-gray-700">
            Make an impact today! Report garbage and keep your city clean. 🌿
          </p>
          <a
            href="/report"
            className="mt-8 inline-flex items-center px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white text-lg font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
          >
            Report Now
            <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
}

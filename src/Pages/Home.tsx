import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Leaf, Sprout, Recycle, ArrowRight } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Main Banner */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Recycle className="h-12 w-12 text-emerald-400 animate-spin-slow" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transforming <span className="text-emerald-400">Waste</span> Into <span className="text-teal-300">Art</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Discover creative ways to repurpose materials and join our community of eco-conscious artists.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                className="flex items-center justify-center px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-all duration-300 group"
                onClick={() => navigate("/journey")}
              >
                My Journey
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                className="flex items-center justify-center px-6 py-3 border border-emerald-600/30 text-emerald-300 hover:bg-emerald-900/30 font-medium rounded-lg transition-all duration-300"
                onClick={() => navigate("/projects")}
              >
                <Sprout className="h-5 w-5 mr-2 text-teal-300" />
                My Projects
              </button>
            </div>
          </div>
        </div>
        
        {/* Environmental decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          {/* Floating leaves */}
          <Leaf className="absolute top-1/4 left-10 w-24 h-24 text-emerald-900/20 rotate-12" />
          <Leaf className="absolute bottom-1/3 right-20 w-32 h-32 text-emerald-900/20 -rotate-45" />
          
          {/* Organic blobs */}
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-emerald-900/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-900/10 rounded-full filter blur-3xl"></div>
        </div>
      </section>

      {/* Earth section divider */}
      <div className="relative h-24 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-emerald-900/30 to-transparent"></div>
      </div>
    </div>
  );
};

export default Home;
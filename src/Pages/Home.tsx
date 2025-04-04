import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Home = () => {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  // Floating debris emojis
  const floatingDebris = ['👖', '🥤', '🔩', '🌳'];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('/background-texture.jpg')] bg-cover opacity-20"></div>
        
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Transforming <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Waste</span> Into Art
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Creating powerful visual statements from recycled materials
            </p>
            <div className="flex gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredButton('journey')}
                onHoverEnd={() => setHoveredButton(null)}
                onClick={() => navigate('/journey')}
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-full font-bold hover:opacity-90 transition relative overflow-hidden"
              >
                {hoveredButton === 'journey' && (
                  <motion.span 
                    className="absolute inset-0 bg-white bg-opacity-20"
                    initial={{ x: -100 }}
                    animate={{ x: 1000 }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                )}
                My Journey
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/projects')}
                className="px-6 py-3 border border-yellow-400 rounded-full font-bold hover:bg-yellow-400 hover:bg-opacity-10 transition"
              >
                View Projects
              </motion.button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating debris - animated */}
        {floatingDebris.map((emoji, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: Math.sin(i * 2) * 100,
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute text-4xl opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </section>

      {/* Earth section divider */}
      <div className="relative h-24 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-yellow-900/10 to-transparent"></div>
      </div>
    </div>
  );
};

export default Home;
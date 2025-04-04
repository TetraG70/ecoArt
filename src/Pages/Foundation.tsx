import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import { Users, Leaf, Recycle, Lightbulb, BookOpen } from 'lucide-react';

const Foundation = () => {
  const foundationInfo = {
    about: {
      title: "About Tetra G Arts Foundation",
      content: [
        "Founded by artist George Njenga, the Tetra G Arts Foundation is dedicated to promoting sustainable art practices and environmental conservation through creative expression.",
        "We believe in the transformative power of art to change perceptions about waste and inspire communities to adopt more sustainable lifestyles."
      ],
      slogan: {
        text: "where art meets power",
        highlight: "text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400"
      }
    },
    mission: {
      title: "Our Mission",
      content: "To pioneer innovative art techniques that repurpose waste materials while mentoring young artists in sustainable creation methods."
    },
    vision: {
      title: "Our Vision",
      content: "A world where art drives environmental consciousness and all materials find new life through creative reuse."
    },
    values: [
      { 
        name: "Sustainability", 
        description: "Commitment to eco-friendly art practices",
        icon: Recycle 
      },
      { 
        name: "Innovation", 
        description: "Pushing boundaries of material transformation",
        icon: Lightbulb 
      },
      { 
        name: "Education", 
        description: "Teaching next-generation artists",
        icon: BookOpen 
      },
      { 
        name: "Community", 
        description: "Collaborative art for social impact",
        icon: Users 
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Tetra G <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Arts Foundation</span>
          </h2>
          
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* About Section */}
              <div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="flex items-start mb-8"
                >
                  <Leaf className="h-8 w-8 text-emerald-400 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-6 text-yellow-400">{foundationInfo.about.title}</h3>
                    {foundationInfo.about.content.map((paragraph, index) => (
                      <p key={index} className="text-gray-300 mb-6">
                        {paragraph}
                      </p>
                    ))}
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                      <h4 className="font-bold mb-3">Our Slogan</h4>
                      <p className={`text-xl ${foundationInfo.about.slogan.highlight}`}>
                        {foundationInfo.about.slogan.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Mission & Vision */}
              <div>
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="mb-8 p-6 bg-gray-800/50 rounded-xl border-l-4 border-blue-400"
                >
                  <div className="flex items-center mb-4">
                    <Lightbulb className="h-6 w-6 text-blue-400 mr-3" />
                    <h3 className="text-2xl font-bold text-blue-400">{foundationInfo.mission.title}</h3>
                  </div>
                  <p className="text-gray-300">{foundationInfo.mission.content}</p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="mb-8 p-6 bg-gray-800/50 rounded-xl border-l-4 border-yellow-400"
                >
                  <div className="flex items-center mb-4">
                    <Leaf className="h-6 w-6 text-yellow-400 mr-3" />
                    <h3 className="text-2xl font-bold text-yellow-400">{foundationInfo.vision.title}</h3>
                  </div>
                  <p className="text-gray-300">{foundationInfo.vision.content}</p>
                </motion.div>
                
                {/* Values */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 text-blue-400">Core Values</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {foundationInfo.values.map((value, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.03 }}
                        className="bg-gray-800 p-4 rounded-lg border border-gray-700"
                      >
                        <div className="flex items-center mb-2">
                          <value.icon className={`h-5 w-5 mr-2 ${
                            value.name === 'Sustainability' ? 'text-emerald-400' :
                            value.name === 'Innovation' ? 'text-yellow-400' :
                            value.name === 'Education' ? 'text-blue-400' :
                            'text-purple-400'
                          }`} />
                          <h4 className="font-bold">{value.name}</h4>
                        </div>
                        <p className="text-gray-300 text-sm">{value.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Foundation;
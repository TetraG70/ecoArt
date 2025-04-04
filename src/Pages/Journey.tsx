import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { X } from 'lucide-react';

const Journey = () => {
  const navigate = useNavigate();
  const [mediaViewer, setMediaViewer] = useState<{type: string, url: string} | null>(null);

  const journeyItems = [
    {
      id: 1,
      year: "Early Years",
      title: "Artistic Beginnings in Mombasa",
      description: "My journey with art began when I first joined school in Mombasa. Even at a young age, I found immense joy in creating, and my passion only grew as my peers appreciated my work.",
      quote: "Despite never receiving formal art training, my inspiration and dedication kept me going.",
      emoji: "🏝️",
      mediaType: "image",
      content: "/mombasa-roots.jpg",
      stats: "Mombasa Roots - Where my artistic journey began"
    },
    {
      id: 2,
      year: "Education",
      title: "Academic Foundations",
      description: "During my time at Kanunga High School, my artistic skills were recognized by both peers and teachers. I was entrusted with developing a renovation plan for the school.",
      quote: "Later at Dedan Kimathi University, I found inspiration in the region's history - home to freedom fighters like Dedan Kimathi and environmentalists like Wangari Maathai.",
      emoji: "🎓",
      mediaType: "image",
      content: "/academic-foundations.jpg",
      stats: "Kanunga High School & Dedan Kimathi University"
    },
    {
      id: 3,
      year: "Breakthrough",
      title: "Artistic Breakthrough with Recycled Materials",
      description: "After initial struggles with pencil drawings, I discovered my true calling - transforming waste into art. My first major works were portraits of Nelson Mandela and Dedan Kimathi made from 700 pairs of jeans.",
      quote: "The Dedan Kimathi portrait captivated thousands at KUPAA, showcasing the power of optical illusions with recycled materials.",
      emoji: "👖",
      mediaType: "video",
      content: "/denim-art-process.mp4",
      content2: "/kimathi-portrait.mp4",
      stats: "700+ Recycled Jeans"
    },
    {
      id: 4,
      year: "Community",
      title: "Thunguma Children's Home Collaboration",
      description: "Volunteering at Thunguma Children's Home allowed me to teach art while promoting environmental conservation. Together we created a portrait of Nelson Mandela using 6,732 bottle tops collected over months.",
      quote: "This project combined art, sustainability, and community engagement in powerful ways.",
      emoji: "👥",
      mediaType: "video",
      content: "/bottle-cap-art.mp4",
      stats: "6,732 Bottle Tops"
    },
    {
      id: 5,
      year: "Innovation",
      title: "Shadows of Legacy (2025)",
      description: "My tribute to Wangari Maathai was crafted from 120kg of timber cutoffs. The portrait only reveals itself under specific lighting, symbolizing how she shed light on environmental issues.",
      quote: "As the first artwork of its kind, it demonstrates how discarded materials can become powerful storytelling tools.",
      emoji: "🌳",
      mediaType: "video",
      content: "/wood-art-process.mp4",
      stats: "120kg Timber Cutoffs"
    }
  ];

  // Removed unused toggleExpand function

  const openMedia = (type: string, url: string) => {
    setMediaViewer({ type, url });
  };

  const closeMedia = () => {
    setMediaViewer(null);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Decorative timeline line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-blue-400 to-purple-500 transform -translate-x-1/2 hidden md:block"></div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Artistic</span> Journey
          </h2>
          
          <div className="space-y-24 relative">
            {journeyItems.map((item, index) => (
              <div key={item.id} className="relative grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                {/* Left-aligned items (odd) */}
                {index % 2 === 0 ? (
                  <>
                    <div className="md:col-span-2 md:pr-8 relative">
                      <div className={`absolute -left-12 top-4 w-8 h-8 rounded-full ${index === 0 ? 'bg-yellow-400' : index === 2 ? 'bg-purple-500' : 'bg-teal-400'} border-4 border-black hidden md:block`}></div>
                      <h3 className="text-2xl font-bold mb-4 text-yellow-400 flex items-center">
                        <span className="md:hidden mr-2">{item.emoji}</span> {item.title}
                      </h3>
                      <p className="text-gray-300 mb-4 bg-gray-900 p-6 rounded-xl border-l-4 border-yellow-400">
                        {item.description}
                      </p>
                      <p className="text-gray-300 italic bg-gray-900 p-6 rounded-xl border-l-4 border-blue-400">
                        "{item.quote}"
                      </p>
                    </div>
                    <div className="md:col-span-3">
                      <div className={`bg-gradient-to-br ${index === 0 ? 'from-yellow-900' : index === 2 ? 'from-purple-900' : 'from-teal-900'} to-black rounded-2xl overflow-hidden ${item.mediaType === 'image' ? 'aspect-video' : 'aspect-[9/16]'} flex items-center justify-center relative`}>
                        <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-20">
                          {item.emoji}
                        </div>
                        {item.mediaType === 'image' ? (
                          <>
                            <button 
                              onClick={() => openMedia('image', item.content)}
                              className="absolute inset-0 w-full h-full flex items-center justify-center"
                            >
                              <div className="relative z-10 text-center p-8">
                                <div className="text-5xl mb-4">{item.emoji}</div>
                                <h4 className="text-xl font-bold mb-2">{item.stats.split(' - ')[0]}</h4>
                                <p className="text-gray-300">{item.stats.split(' - ')[1]}</p>
                              </div>
                            </button>
                          </>
                        ) : (
                          <>
                            {/* Two video placeholders for breakthrough section */}
                            {index === 2 ? (
                              <div className="grid grid-cols-2 gap-4 w-full h-full p-4">
                                <button 
                                  onClick={() => openMedia('video', item.content)}
                                  className="relative bg-black bg-opacity-50 rounded-xl flex items-center justify-center"
                                >
                                  <div className="text-center p-4">
                                    <div className="text-4xl mb-2">Process</div>
                                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                                      <span className="text-xl">▶</span>
                                    </div>
                                  </div>
                                </button>
                                <button 
                                  onClick={() => openMedia('video', item.content2!)}
                                  className="relative bg-black bg-opacity-50 rounded-xl flex items-center justify-center"
                                >
                                  <div className="text-center p-4">
                                    <div className="text-4xl mb-2">Result</div>
                                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                                      <span className="text-xl">▶</span>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            ) : (
                              <button 
                                onClick={() => openMedia('video', item.content)}
                                className="absolute inset-0 flex items-center justify-center"
                              >
                                <div className="relative z-10 text-center p-8">
                                  <div className="text-8xl mb-6">{item.stats.split(' ')[0]}</div>
                                  <h4 className="text-2xl font-bold mb-2">{item.stats.split(' ').slice(1).join(' ')}</h4>
                                  <p className="text-gray-300 mb-6">Transformed into art</p>
                                  <div className={`w-20 h-20 ${index === 0 ? 'bg-yellow-400' : index === 2 ? 'bg-purple-500' : 'bg-teal-400'} rounded-full flex items-center justify-center mx-auto`}>
                                    <span className="text-2xl">▶</span>
                                  </div>
                                </div>
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Right-aligned items (even) */}
                    <div className="md:col-span-3 order-2 md:order-1">
                      <div className={`bg-gradient-to-br ${index === 1 ? 'from-blue-900' : 'from-green-900'} to-black rounded-2xl overflow-hidden aspect-[9/16] relative`}>
                        <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-20">
                          {item.emoji}
                        </div>
                        <button 
                          onClick={() => openMedia(item.mediaType, item.content)}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="relative z-10 text-center p-8">
                            <div className="text-8xl mb-6">{item.stats.split(' ')[0]}</div>
                            <h4 className="text-2xl font-bold mb-2">{item.stats.split(' ').slice(1).join(' ')}</h4>
                            <p className="text-gray-300 mb-6">Community-collected materials</p>
                            <div className={`w-20 h-20 ${index === 1 ? 'bg-blue-400' : 'bg-green-400'} rounded-full flex items-center justify-center mx-auto`}>
                              <span className="text-2xl">▶</span>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="md:col-span-2 md:pl-8 relative order-1 md:order-2">
                      <div className={`absolute -right-12 top-4 w-8 h-8 rounded-full ${index === 1 ? 'bg-blue-400' : 'bg-green-400'} border-4 border-black hidden md:block`}></div>
                      <h3 className="text-2xl font-bold mb-4 text-blue-400 flex items-center justify-end md:justify-start">
                        <span className="md:hidden mr-2">{item.emoji}</span> {item.title}
                      </h3>
                      <p className="text-gray-300 mb-4 bg-gray-900 p-6 rounded-xl border-r-4 md:border-l-4 border-blue-400 text-right md:text-left">
                        {item.description}
                      </p>
                      <p className="text-gray-300 bg-gray-900 p-6 rounded-xl border-r-4 md:border-l-4 border-yellow-400 text-right md:text-left">
                        "{item.quote}"
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Future section */}
            <div className="relative flex flex-col items-center justify-center text-center py-12">
              <div className="w-8 h-8 rounded-full bg-purple-500 border-4 border-black mb-6"></div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">The Journey Continues...</h3>
              <p className="text-gray-300 max-w-2xl mx-auto bg-gray-900 p-6 rounded-xl border border-purple-500">
                My artistic evolution continues as I explore new materials and larger-scale installations. Each project pushes the boundaries of sustainable art while honoring Kenya's rich cultural heritage and environmental legacy.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/projects')}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-bold hover:opacity-90 transition"
              >
                Explore My Projects
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Media Viewer Modal */}
      {mediaViewer && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeMedia}
            className="absolute top-4 right-4 text-white text-2xl hover:text-yellow-400 transition z-50"
          >
            <X className="h-8 w-8" />
          </button>
          <div className={`relative ${mediaViewer.type === 'image' ? 'max-w-4xl' : 'max-w-md'} w-full`}>
            {mediaViewer.type === 'image' ? (
              <img 
                src={mediaViewer.url} 
                alt="Artwork detail" 
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            ) : (
              <div className="aspect-[9/16] w-full bg-black rounded-xl overflow-hidden">
                <video 
                  src={mediaViewer.url}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            <div className="mt-4 text-center">
              <button 
                onClick={closeMedia}
                className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Journey;
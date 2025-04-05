import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import { X } from 'lucide-react';

// Import media files
import HeroesImage from '../assets/images/Heroes.jpg';
import DedanKimathiVideo from '../assets/videos/Dedan Kimathi.mp4';
import NelsonMandelaDenimVideo from '../assets/videos/Nelson Mandela Denim.mp4';
import NelsonMandelaBottletopsVideo from '../assets/videos/Nelson Mandela Bottletops.mp4';
import WangariMaathaiVideo from '../assets/videos/Wangari Maathai.mp4';

const Journey = () => {
  const navigate = useNavigate();
  const [mediaViewer, setMediaViewer] = useState<{type: string, url: string} | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Floating materials background - increased number of emojis
  const floatingMaterials = [...Array(40)].map((_, i) => {
    const materials = [
      { emoji: "👖", color: "text-blue-400", size: "text-3xl" },
      { emoji: "🥤", color: "text-yellow-400", size: "text-4xl" },
      { emoji: "🌳", color: "text-green-400", size: "text-3xl" },
      { emoji: "🔩", color: "text-gray-300", size: "text-3xl" },
      { emoji: "🎨", color: "text-purple-400", size: "text-3xl" },
      { emoji: "♻️", color: "text-teal-400", size: "text-4xl" },
      { emoji: "🖌️", color: "text-pink-400", size: "text-3xl" },
      { emoji: "🗿", color: "text-orange-400", size: "text-4xl" }
    ];
    const material = materials[i % 8];
    
    return {
      ...material,
      id: i,
      initialX: Math.random() * 100 - 50,
      initialY: Math.random() * 100 - 50,
      initialRotate: Math.random() * 360,
      animateX: Math.random() * 1000 - 500,
      animateY: Math.random() * 1000 - 500,
      animateRotate: Math.random() * 720,
      duration: 20 + Math.random() * 20,
      delay: Math.random() * 5,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`
    };
  });

  const journeyItems = [
    {
      id: 1,
      year: "Early Years",
      title: "Artistic Beginnings in Mombasa",
      description: "My journey with art began when I first joined school in Mombasa. Even at a young age, I found immense joy in creating, and my passion only grew as my peers appreciated my work. I would spend hours sketching scenes from daily life and the beautiful coastal landscapes that surrounded me.",
      quote: "Despite never receiving formal art training, my inspiration and dedication kept me going.",
      emoji: "🏝️",
      mediaType: "image",
      content: "/mombasa-roots.jpg",
      stats: "Mombasa Roots - Where my artistic journey began",
      color: "yellow"
    },
    {
      id: 2,
      year: "2018-present",
      title: "Academic Foundations",
      description: "During my time at Kanunga High School, my artistic skills were recognized by both peers and teachers. I was entrusted with developing a renovation plan for the school, where I designed murals that transformed blank walls into vibrant learning spaces. This experience taught me how art could impact environments and communities.",
      quote: "Later at Dedan Kimathi University located in Nyeri, I found inspiration in the region's history - home to freedom fighters like Dedan Kimathi and environmentalists like Wangari Maathai.",
      emoji: "🎓",
      mediaType: "image",
      content: HeroesImage,
      stats: "Heroes Who Inspired Me",
      color: "blue"
    },
    {
      id: 3,
      year: "2023",
      title: "Breakthrough with Recycled Materials",
      description: "On January 7th, 2023, I officially began creating artworks from recycled materials after losing inspiration with traditional pencil drawings. My first major works were portraits of Nelson Mandela and Dedan Kimathi made from 400 pairs of discarded jeans. This marked my transition into sustainable art that carried powerful messages.",
      quote: "The Dedan Kimathi portrait captivated thousands at KUPAA, showcasing how waste materials could create stunning optical illusions.",
      emoji: "👖",
      mediaType: "video",
      content: NelsonMandelaDenimVideo,
      content2: DedanKimathiVideo,
      stats: "700+ Recycled Jeans Transformed",
      color: "purple"
    },
    {
      id: 4,
      year: "2023-2024",
      title: "Community Collaboration",
      description: "From December 2023, I volunteered at Thunguma Children's Home, teaching art while promoting environmental conservation. Together with the children, we created a portrait of Nelson Mandela using 6,732 collected bottle tops. This project showed me how art could unite communities around sustainability.",
      quote: "This project combined art, sustainability, and community engagement in powerful ways that changed my perspective forever.",
      emoji: "👥",
      mediaType: "video",
      content: NelsonMandelaBottletopsVideo,
      stats: "6,732 Bottle Tops Collected",
      color: "teal"
    },
    {
      id: 5,
      year: "2025",
      title: "Shadows of Legacy",
      description: "My tribute to Wangari Maathai was crafted from 120kg of timber cutoffs. The portrait only reveals itself under specific lighting, symbolizing how she shed light on environmental issues. This innovative technique represents my evolution into creating art that interacts with its environment.",
      quote: "As the first artwork of its kind, it demonstrates how discarded materials can become powerful storytelling tools when viewed from the right perspective.",
      emoji: "🌳",
      mediaType: "video",
      content: WangariMaathaiVideo,
      stats: "120kg Timber Waste Repurposed",
      color: "green"
    }
  ];

  const openMedia = (type: string, url: string) => {
    setMediaViewer({ type, url });
  };

  const closeMedia = () => {
    setMediaViewer(null);
    videoRefs.current.forEach(video => {
      if (video) video.pause();
    });
  };

  const navigateToProjects = () => {
    window.scrollTo(0, 0);
    navigate('/projects');
  };

  const getColorClass = (color: string) => {
    switch(color) {
      case 'yellow': return 'border-yellow-400 text-yellow-400';
      case 'blue': return 'border-blue-400 text-blue-400';
      case 'purple': return 'border-purple-500 text-purple-400';
      case 'teal': return 'border-teal-400 text-teal-400';
      case 'green': return 'border-green-400 text-green-400';
      default: return 'border-gray-400 text-gray-400';
    }
  };

  const getBgColorClass = (color: string) => {
    switch(color) {
      case 'yellow': return 'bg-yellow-400';
      case 'blue': return 'bg-blue-400';
      case 'purple': return 'bg-purple-500';
      case 'teal': return 'bg-teal-400';
      case 'green': return 'bg-green-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="bg-black text-white min-h-screen px-4 md:px-10 py-16 overflow-hidden relative">
      {/* Floating Materials Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingMaterials.map((material) => (
          <motion.div
            key={material.id}
            initial={{ 
              opacity: 0,
              x: material.initialX,
              y: material.initialY,
              rotate: material.initialRotate
            }}
            animate={{ 
              opacity: [0, 0.3, 0],
              x: material.animateX,
              y: material.animateY,
              rotate: material.animateRotate
            }}
            transition={{
              duration: material.duration,
              repeat: Infinity,
              delay: material.delay
            }}
            className={`absolute ${material.color} ${material.size}`}
            style={{
              left: material.left,
              top: material.top,
            }}
          >
            {material.emoji}
          </motion.div>
        ))}
      </div>

      <Navbar />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Artistic</span> Journey
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            From pencil sketches to large-scale recycled art installations
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="max-w-6xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-yellow-400 via-blue-400 to-purple-500 -translate-x-1/2 hidden md:block"></div>
          
          {/* Timeline Items */}
          <div className="space-y-24">
            {journeyItems.map((item, index) => (
              <motion.div
                key={item.id}
                className={`relative ${index % 2 === 0 ? 'md:pr-[50%] pl-10' : 'md:pl-[50%] pr-10'}`}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot with emoji */}
                <div className={`absolute top-6 hidden md:flex items-center justify-center
                  ${index % 2 === 0 ? 'left-[calc(50%-1.25rem)]' : 'right-[calc(50%-1.25rem)]'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-black z-10 ${getBgColorClass(item.color)}`}>
                    <span className="text-lg">{item.emoji}</span>
                  </div>
                </div>

                {/* Mobile year indicator */}
                <div className="md:hidden mb-4 flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${getBgColorClass(item.color)}`}>
                    <span className="text-sm">{item.emoji}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.year}</h3>
                </div>

                {/* Content container */}
                <div className={`p-6 rounded-xl border ${getColorClass(item.color)} bg-gray-900/50 backdrop-blur-sm shadow-lg`}>
                  <h3 className="text-2xl font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-white text-sm mb-4">{item.year}</p>
                  
                  {/* Media container - modified for the "Breakthrough with Recycled Materials" section */}
                  <div className="mb-6 bg-gradient-to-br from-gray-800 to-black rounded-xl overflow-hidden relative">
                    {index === 2 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Nelson Mandela box */}
                        <div className="aspect-video relative">
                          <button 
                            onClick={() => openMedia('video', item.content)}
                            className="absolute inset-0 w-full h-full"
                          >
                            <video 
                              src={item.content}
                              className="w-full h-full object-cover opacity-50 hover:opacity-80 transition"
                              muted
                              loop
                              ref={el => { videoRefs.current[0] = el; }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-30">
                              Nelson Mandela
                            </div>
                          </button>
                        </div>
                        
                        {/* Dedan Kimathi box */}
                        <div className="aspect-video relative">
                          <button 
                            onClick={() => openMedia('video', item.content2!)}
                            className="absolute inset-0 w-full h-full"
                          >
                            <video 
                              src={item.content2}
                              className="w-full h-full object-cover opacity-50 hover:opacity-80 transition"
                              muted
                              loop
                              ref={el => { videoRefs.current[1] = el; }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold bg-black bg-opacity-30">
                              Dedan Kimathi
                            </div>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-video relative">
                        <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-20">
                          {item.emoji}
                        </div>
                        
                        {item.mediaType === 'image' ? (
                          index === 0 ? (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-9xl">{item.emoji}</div>
                            </div>
                          ) : (
                            <button 
                              onClick={() => openMedia('image', item.content)}
                              className="absolute inset-0 w-full h-full flex items-center justify-center"
                            >
                              <img 
                                src={item.content} 
                                alt={item.title}
                                className="w-full h-full object-cover opacity-70 hover:opacity-90 transition"
                              />
                            </button>
                          )
                        ) : (
                          <button 
                            onClick={() => openMedia('video', item.content)}
                            className="absolute inset-0 w-full h-full flex items-center justify-center"
                          >
                            <video 
                              src={item.content}
                              className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-80 transition"
                              muted
                              loop
                              ref={el => { videoRefs.current[index] = el; }}
                            />
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="space-y-4 text-white">
                    <p>
                      {item.description}
                    </p>
                    <p className={`italic pl-4 border-l-4 py-2 ${getColorClass(item.color)}`}>
                      "{item.quote}"
                    </p>
                    {item.stats && (
                      <div className="mt-4 text-sm text-yellow-400">
                        {item.stats}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Final section */}
            <div className="relative flex flex-col items-center justify-center text-center py-12">
              <div className="w-12 h-12 rounded-full bg-purple-500 border-4 border-black mb-6 flex items-center justify-center">
                <span className="text-xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">The Journey Continues...</h3>
              <p className="text-white max-w-2xl mx-auto bg-gray-900/50 p-6 rounded-xl border border-purple-500 backdrop-blur-sm">
                My artistic evolution continues as I explore new materials and larger-scale installations. Each project pushes the boundaries of sustainable art while honoring Kenya's rich cultural heritage and environmental legacy. The future holds more innovative works that blend art, sustainability, and technology.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={navigateToProjects}
                className="mt-8 px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-bold hover:opacity-90 transition text-white"
              >
                Explore My Projects
              </motion.button>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="max-w-4xl mx-auto mt-28 p-8 bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-gray-800 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-white">
              By <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Numbers</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "700+", label: "Jeans Repurposed", emoji: "👖" },
                { value: "6,732", label: "Bottle Caps", emoji: "🥤" },
                { value: "120kg", label: "Timber Waste", emoji: "🌳" },
                { value: "1M+", label: "Future Caps Target", emoji: "♻️" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="p-4 bg-gray-800/30 rounded-xl border border-gray-700 text-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="text-3xl mb-2">{stat.emoji}</div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">{stat.value}</div>
                  <div className="text-white text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Media viewer modal */}
      <AnimatePresence>
        {mediaViewer && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button 
              onClick={closeMedia}
              className="absolute top-4 right-4 text-white text-2xl hover:text-yellow-400 transition z-50"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div 
              className={`relative ${mediaViewer.type === 'image' ? 'max-w-4xl' : 'max-w-md'} w-full`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
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
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Journey;
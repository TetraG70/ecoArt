import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from "../components/Navbar";
import { X } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [videoPlaying, setVideoPlaying] = useState<number | null>(null);

  const projects = [
    {
      id: 3,
      title: "Stitching In Legacy",
      year: "2023",
      category: "material-transformation",
      materials: "400 denim jeans and jackets",
      description: "A revolutionary artwork using recycled denim to portray Kenyan freedom fighter Dedan Kimathi.",
      fullStory: `In a remarkable fusion of creativity, sustainability, and defiance of logic, Tetra G arts introduces an awe-inspiring masterpiece titled "Stitching In Legacy". This extraordinary artwork, carefully & patiently crafted over 2 months, challenges conventional artistic norms, utilizing 400 denim jackets and jeans to breathe life into the iconic image of Kenyan freedom fighter Dedan Kimathi.

Sustainable Artistry: A Denim Revolution
Tetra G arts has not just created art but has championed a cause. By gluing 250 wasted denim jeans onto the board, "Stitching In Legacy" is a resounding statement in favor of the circular economy. The collection of waste denim jeans, frame wood, and glue spanned a meticulous 12 months, showcasing Tetra G's commitment to sustainability and responsible artistry.

A Cultural Tapestry: Dedan Kimathi's Legacy
At the heart of this masterpiece lies the portrayal of Dedan Kimathi, a symbol of Kenya's fight for freedom who also inspired other freedom fighters across Africa. The artist has skillfully woven cultural significance into every stitch, capturing the spirit of a national hero. "Stitching In Legacy" pays homage to a pivotal figure in Kenyan history, elevating the artwork to a cultural treasure.

Defying Logic: A Play of Light and Distance
Tetra G goes beyond the canvas, introducing an intriguing play of physics within the artwork. Viewers are met with the paradoxical experience of seeing the portrait of Dedan Kimathi more vividly in dim light and not on bright light. At a distance, the freedom fighter's visage becomes clearer, defying conventional artistic expectations. Squint your eyes by 75%, or employ your phone camera during daylight, and Dedan Kimathi comes into focus, leaving onlookers in awe of Tetra G mastery over visual perception. Physics concept of concentric circles.

The Journey Unveiled: 14 Months of Dedication
Behind the scenes, Tetrag_arts embarked on a 14-month hustle to bring "Dedan Kimathi's Nightfall" to life. The initial year was dedicated to collecting and preparing the materials—waste denim jeans, frame wood, and glue—setting the stage for the intricate artwork. The subsequent two months witnessed the process of coiling denim seams to its rightful place, finally forming Dedan Kimathi's face.

"Stitching In Legacy" is more than a mere artwork; it's a testament to Tetra G dedication to sustainability, cultural reverence, and the exploration of artistic boundaries. This masterpiece invites viewers to witness the harmonious convergence of art and science, making it a must-see for enthusiasts, history buffs, and those captivated by the magic of sustainable creativity.`,
      video: "/kimathi-denim.mp4",
      emoji: "👖"
    },
    {
      id: 4,
      title: "Sustainable Threads of Leadership",
      year: "2023",
      category: "material-transformation",
      materials: "Denim buttons from discarded jeans",
      description: "A mosaic tribute to Nelson Mandela crafted from denim buttons.",
      fullStory: `Tetra G's evocative artwork, "Sustainable Threads of Leadership," pays homage to the enduring legacy of Nelson Mandela while championing sustainability through the creative repurposing of waste denim. This masterful piece not only immortalizes Mandela as an African icon but also weaves a narrative of resilience and responsible waste management, transforming discarded jeans into a visually striking tribute.

Medium and Technique:
The artwork ingeniously repurposes waste denim from discarded jeans trousers, utilizing their buttons to construct a breathtaking mosaic that captures the essence of Nelson Mandela. Over the course of a dedicated month and a half, Tetra G artfully arranged the denim buttons, turning what was once considered waste into a compelling representation of Mandela's enduring legacy.

Symbolism:
Denim, chosen for its connotations of durability and endurance, mirrors Mandela's unwavering commitment to justice and equality. The carefully arranged buttons symbolize the diverse facets of Mandela's life and impact, while the use of recycled materials conveys a potent message about sustainability and responsible waste management, emphasizing the beauty found in the discarded.

Interactive Element:
An intriguing facet of the artwork lies in its demand for viewer participation. To fully unveil Mandela's visage, viewers are invited to either squint their eyes to 70% or step back. This deliberate engagement adds an interactive layer, encouraging viewers to actively uncover the nuances of the piece. This element of surprise underscores the dynamic nature of the artwork and prompts contemplation on how perspectives can shift with a change in focus.

Waste Management Message:
"Sustainable Threads" not only serves as a visual celebration of Mandela's legacy but also as a reminder of the importance of responsible waste management. By repurposing discarded jeans, Tetra G draws attention to the potential for beauty in the overlooked and highlights the need for sustainable practices in the art world and beyond.

Conclusion:
This artwork stands as a testament to Tetra G's ability to transform waste materials into a profound and visually striking tribute, all while championing sustainability and responsible waste management. "Sustainable Threads" invites viewers to appreciate not only the artistry but also the deeper symbolism woven into the carefully arranged buttons that collectively form the face of an African hero, all within the context of a mindful approach to waste.`,
      video: "/mandela-denim-buttons.mp4",
      emoji: "🧵"
    },
    {
      id: 2,
      title: "In Every Nail, a Story of Support",
      year: "2024",
      category: "community",
      materials: "21,000 nails on MDF board",
      description: "A portrait of Mary Lynn Staley crafted from nails hammered by students at Thunguma Children Center.",
      fullStory: `**In Every Nail, a Story of Support**

On May 20, 2024, the Thunguma Children's Home embarked on a unique artistic journey, collaborating with the children to create a portrait of Mary Lynn Staley. Her unwavering support for the center and her contributions to the Rathithi Polytechnic have significantly impacted the local community, making this tribute particularly meaningful.

**The Project**  
This ambitious portrait, crafted from 21,000 nails, was designed to reflect the gratitude of the children at Thunguma. Under the guidance of Tetra G, the art students began hammering nails onto an MDF board, transforming a simple material into a powerful expression of appreciation.

**Learning Through Creation**  
Over two months and two weeks, the children engaged in a hands-on learning experience that fostered patience and teamwork. Each nail represented not just a physical contribution but also the collective effort of the students, embodying their respect and gratitude for Mary Lynn's dedication.

**Challenges Faced**  
The project was not without its difficulties:

1. **Physical Demands**: Hammering thousands of nails required significant endurance, leading to fatigue that necessitated regular breaks.
2. **Coordination**: Managing different skill levels among students required careful facilitation to maintain engagement.
3. **Precision**: Achieving the optical illusion demanded meticulous nail placement, with mistakes requiring adjustments.
4. **Resources**: Sourcing sufficient materials while maintaining schedule required diligent planning.

**Artistic Techniques**  
The portrait employs optical illusion techniques that create a dynamic viewing experience. To fully appreciate the image, viewers must squint, use a phone camera, or step back - highlighting the fascinating interplay between perception and reality.

**Conclusion**  
This collaborative artwork stands as a powerful testament to community support and artistic expression. The finished portrait will serve as a lasting tribute to Mary Lynn Staley's impact and the valuable lessons learned by the students throughout this creative process.`,
      video: "/nail-portrait.mp4",
      emoji: "🔩"
    },
    {
      id: 1,
      title: "Colors of Hope: Mandela from Plastic Dreams",
      year: "2024",
      category: "community",
      materials: "6,732 plastic bottle tops",
      description: "A vibrant portrait of Nelson Mandela created from collected bottle tops over four months.",
      fullStory: `In a world often clouded by waste, Tetra G's artwork shines brightly—a vibrant portrait of Nelson Mandela created from 6,732 plastic bottle tops. Collected over four months and two weeks, these colorful caps tell a story of renewal, transforming discarded materials into a powerful symbol of hope and creativity.

**Interactive Engagement: A Dance of Perception**  
With an inventive approach, Tetra G employs optical illusion to draw viewers into the art. To see Mandela's image clearly, one must squint, use a smartphone camera, or step back about 20 meters. This playful interaction invites observers to engage actively, encouraging them to rethink their relationship with waste and discover beauty in what is often overlooked.

**Educational Collaboration: Nurturing Young Artists**  
In March 2024, this project blossomed with the help of art students from Thunguma Children Center. Tetra G guided these young artists, teaching them the importance of environmental conservation through creative expression. Over two months and two weeks, they worked together, learning about recycling, teamwork, and shared purpose.

**Celebrating Legacy: Honoring Mandela's Spirit**  
This collaborative effort pays tribute to Mandela, embodying his vision of unity and collective action. Each bottle top symbolizes not just waste but a step toward a more hopeful future. Through this art, Tetra G and his students celebrate Mandela's legacy, reminding us that together, we can create change.

**Conclusion: Art as a Catalyst**  
As viewers stand before this striking portrait, they witness art's power to inspire action. The work encourages us to cherish our environment and see potential in every discarded item. In this vibrant tapestry of plastic dreams, we find a call to transform waste into beauty and hope.`,
      video: "/mandela-bottle-tops.mp4",
      emoji: "🥤"
    },
    {
      id: 5,
      title: "Wangari Maathai's Shadow",
      year: "2025",
      category: "installations",
      materials: "120kg timber cutoffs",
      description: "A portrait of Wangari Maathai revealed only under specific lighting.",
      fullStory: `This innovative project began in a furniture workshop, where I noticed the beautiful grain patterns in discarded wood cutoffs. Inspired by Wangari Maathai's environmental legacy, I envisioned a portrait that would only reveal itself through light and shadow - just as she illuminated environmental issues others ignored.

Through this project, I aimed to raise awareness about the importance of minimizing timber waste, encouraging the maximum use of every piece, and promoting more sustainable practices in how we utilize natural resources.

The cutoffs were carefully shaped at angles of 90°, 87°, 84°, 81°, and 78°, arranged so that the smallest angles formed the darkest regions of the portrait, while the larger angles created the lighter areas. At first glance, the image appeared abstract and fragmented. However, when illuminated with a focused light, the portrait of Wangari Maathai emerged, revealed through the interplay of shadows and angles.

This technique carried a deeper symbolism. Just as Wangari Maathai shed light on environmental issues that were often ignored, the bright light revealed a portrait created from what would have otherwise been discarded timber. It demonstrated how even the smallest, most seemingly useless pieces could be transformed into something valuable, serving as a reminder that every resource holds potential when used thoughtfully and creatively.

Through this portrait, I hoped to inspire a shift in mindset, encouraging people to rethink waste, embrace sustainable resource management, and recognize the importance of every piece of timber we use. In honoring Maathai's legacy, I aimed to promote a future where we value and preserve our environment, reducing wastage and making the most of what we have.`,
      video: "/wangari-timber.mp4",
      emoji: "🌳"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'community': return 'border-blue-400';
      case 'material-transformation': return 'border-yellow-400';
      case 'installations': return 'border-green-400';
      default: return 'border-purple-400';
    }
  };

  const toggleStory = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const toggleVideo = (id: number) => {
    setVideoPlaying(videoPlaying === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Projects</span>
          </h2>
          
          <div className="space-y-16">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`bg-gray-900 rounded-2xl overflow-hidden border ${getCategoryColor(project.category)}`}
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Portrait-oriented video thumbnail */}
                    <div className="md:w-1/3">
                      <div className="aspect-[9/16] relative bg-gradient-to-br from-gray-800 to-black rounded-xl overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20">
                          {project.emoji}
                        </div>
                        <button 
                          onClick={() => toggleVideo(project.id)}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="relative z-10 text-center p-4 w-full h-full flex flex-col justify-between">
                            <div className="text-6xl mt-8">{project.emoji}</div>
                            <div className="mb-8">
                              <div className="text-3xl font-bold mb-2">
                                {project.materials.split(' ')[0]}
                              </div>
                              <div className="text-sm">
                                {project.materials.split(' ').slice(1).join(' ')}
                              </div>
                            </div>
                            <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-8">
                              <span className="text-xl">▶</span>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <span className={
                          project.category === 'community' 
                            ? 'text-blue-400' 
                            : project.category === 'material-transformation'
                              ? 'text-yellow-400'
                              : 'text-green-400'
                        }>
                          {project.year}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-lg mb-4">
                        <span>♻️</span>
                        <span>{project.materials}</span>
                      </div>
                      <p className="text-gray-300 mb-6">{project.description}</p>
                      <button 
                        onClick={() => toggleStory(project.id)}
                        className="text-yellow-400 hover:underline flex items-center"
                      >
                        {expandedProject === project.id ? 'Read Less' : 'Read Full Story'}
                        <span className="ml-2">{expandedProject === project.id ? '↑' : '↓'}</span>
                      </button>
                      {expandedProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 text-gray-300 whitespace-pre-line bg-gray-800 p-6 rounded-lg"
                        >
                          {project.fullStory}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Enhanced Video Modal with Close Button */}
      {videoPlaying && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button 
            onClick={() => setVideoPlaying(null)}
            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition z-50"
            aria-label="Close video"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="relative w-full max-w-md">
            <div className="aspect-[9/16] bg-gray-900 rounded-xl overflow-hidden">
              <video 
                src={projects.find(p => p.id === videoPlaying)?.video}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-bold">
                {projects.find(p => p.id === videoPlaying)?.title}
              </h3>
              <p className="text-gray-300">
                {projects.find(p => p.id === videoPlaying)?.description}
              </p>
              <div className="mt-2 flex items-center justify-center gap-2 text-sm">
                <span className="text-lg">♻️</span>
                <span>{projects.find(p => p.id === videoPlaying)?.materials}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
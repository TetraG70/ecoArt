import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from "../components/Navbar";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:georgeragui70@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
  };

  const socialMedia = [
    { name: "Facebook", url: "https://www.facebook.com/share/169Q1wwNbp/?mibextid=wwXIfr", icon: Facebook, color: "hover:text-[#1877F2]" },
    { name: "Instagram", url: "https://www.instagram.com/tetrag_arts", icon: Instagram, color: "hover:text-[#E4405F]" },
    { name: "Twitter", url: "https://x.com/tetrag_arts?s=21", icon: Twitter, color: "hover:text-[#1DA1F2]" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/tetra-g-22416324b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: Linkedin, color: "hover:text-[#0077B5]" },
    { name: "YouTube", url: "https://www.youtube.com/@tetrag_arts", icon: Youtube, color: "hover:text-[#FF0000]" },
    { name: "TikTok", url: "https://www.tiktok.com/@tetrag_arts?_t=ZM-8vC3Gxcm486&_r=1", icon: () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 hover:text-black transition">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ), color: "hover:text-black" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Touch</span>
          </h2>
          
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:border-yellow-500 focus:outline-none" 
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none" 
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 bg-gray-800 rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none" 
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-blue-500 rounded-lg font-bold w-full hover:opacity-90 transition"
              >
                Send Message
              </motion.button>
            </form>
            
            <div className="mt-12 pt-8 border-t border-gray-800">
              <h3 className="text-xl font-bold mb-6">Connect Directly</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-yellow-400" />
                  <a 
                    href="mailto:georgeragui70@gmail.com" 
                    className="hover:text-yellow-400 transition"
                  >
                    georgeragui70@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <a 
                    href="tel:+254706003630" 
                    className="hover:text-blue-400 transition"
                  >
                    +254 706 003 630
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-green-400" />
                  <span>Nyeri, Kenya</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-6 mt-8 justify-center md:justify-start">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -3 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
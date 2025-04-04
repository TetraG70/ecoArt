import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home,
  Sprout,
  Folder,
  Building2,
  Mail,
  Menu,
  X
} from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', path: '/', label: 'Home', icon: Home },
  { id: 'journey', path: '/journey', label: 'Journey', icon: Sprout },
  { id: 'projects', path: '/projects', label: 'Projects', icon: Folder },
  { id: 'foundation', path: '/foundation', label: 'Foundation', icon: Building2 },
  { id: 'contact', path: '/contact', label: 'Contact', icon: Mail }
];

const Navbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getActiveSection = () => {
    return NAV_ITEMS.find(item => pathname === item.path)?.id || 'home';
  };

  const activeSection = getActiveSection();

  const handleNavigation = (path: string) => {
    // Scroll to top before navigation
    window.scrollTo(0, 0);
    navigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo with enhanced animation */}
          <div className="flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('/')}
              className="text-xl font-bold flex items-center"
            >
              <span className="mr-2">🎨</span>
              <span>George </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-400">Njenga</span>
            </motion.button>
          </div>

          {/* Desktop Navigation with icon enhancements */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item.path)}
                className={`group capitalize flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                  activeSection === item.id 
                    ? 'text-yellow-400 bg-yellow-400/10' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className={`h-5 w-5 transition-colors ${
                  activeSection === item.id 
                    ? 'text-yellow-400' 
                    : 'text-gray-400 group-hover:text-white'
                }`} />
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black bg-opacity-95 py-4 px-4 border-t border-gray-800"
        >
          <div className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(item.path)}
                className={`flex items-center gap-4 py-3 px-4 rounded-lg transition-colors ${
                  activeSection === item.id 
                    ? 'bg-yellow-400/10 text-yellow-400 border-l-4 border-yellow-400' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className={`h-5 w-5 ${
                  activeSection === item.id ? 'text-yellow-400' : 'text-gray-400'
                }`} />
                <span className="text-lg">{item.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
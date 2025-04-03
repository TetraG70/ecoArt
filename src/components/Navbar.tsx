import BuildingLibraryIcon from "@heroicons/react/24/solid/esm/BuildingLibraryIcon";
import { 
    HomeIcon, 
    FolderIcon, 
    LeafIcon,
    SproutIcon,
    MailIcon
  } from "lucide-react";
  import { useNavigate, useLocation } from "react-router-dom";
  
  const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
  
    const isActive = (path: string): boolean => location.pathname === path;
  
    return (
      <nav className="bg-gray-900 border-b border-emerald-900/50 fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span 
                  className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent cursor-pointer flex items-center"
                  onClick={() => navigate("/")}
                >
                  <LeafIcon className="h-5 w-5 mr-1 text-emerald-400" />
                  EcoArt
                </span>
              </div>
              <div className="hidden sm:ml-8 sm:flex sm:space-x-2">
                <button
                  onClick={() => navigate("/")}
                  className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive("/") 
                      ? "bg-emerald-900/30 text-emerald-300" 
                      : "text-gray-300 hover:text-emerald-300"
                  }`}
                >
                  <HomeIcon className="h-4 w-4 mr-2" />
                  Home
                </button>
                <button
                  onClick={() => navigate("/projects")}
                  className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive("/projects") 
                      ? "bg-emerald-900/30 text-emerald-300" 
                      : "text-gray-300 hover:text-emerald-300 hover:bg-emerald-900/20"
                  }`}
                >
                  <FolderIcon className="h-4 w-4 mr-2" />
                  Projects
                </button>
                <button
                  onClick={() => navigate("/journey")}
                  className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive("/journey") 
                      ? "bg-emerald-900/30 text-emerald-300" 
                      : "text-gray-300 hover:text-emerald-300 hover:bg-emerald-900/20"
                  }`}
                >
                  <SproutIcon className="h-4 w-4 mr-2" />
                  Journey
                </button>
                <button
                  onClick={() => navigate("/foundation")}
                  className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive("/foundation") 
                      ? "bg-emerald-900/30 text-emerald-300" 
                      : "text-gray-300 hover:text-emerald-300 hover:bg-emerald-900/20"
                  }`}
                >
                  <BuildingLibraryIcon  className="h-4 w-4 mr-2" />
                  Foundation
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive("/contact") 
                      ? "bg-emerald-900/30 text-emerald-300" 
                      : "text-gray-300 hover:text-emerald-300 hover:bg-emerald-900/20"
                  }`}
                >
                  <MailIcon className="h-4 w-4 mr-2" />
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
  
        {/* Mobile menu */}
        <div className="sm:hidden bg-gray-900 border-t border-emerald-900/50">
          <div className="pt-1 pb-2 space-y-1">
            <button
              onClick={() => navigate("/")}
              className={`w-full text-left px-4 py-3 flex items-center ${
                isActive("/") 
                  ? "bg-emerald-900/30 text-emerald-300 border-l-4 border-emerald-400" 
                  : "text-gray-300 hover:bg-emerald-900/20"
              }`}
            >
              <HomeIcon className="h-4 w-4 mr-3" />
              Home
            </button>
            <button
              onClick={() => navigate("/projects")}
              className={`w-full text-left px-4 py-3 flex items-center ${
                isActive("/projects") 
                  ? "bg-emerald-900/30 text-emerald-300 border-l-4 border-emerald-400" 
                  : "text-gray-300 hover:bg-emerald-900/20"
              }`}
            >
              <FolderIcon className="h-4 w-4 mr-3" />
              Projects
            </button>
            <button
              onClick={() => navigate("/journey")}
              className={`w-full text-left px-4 py-3 flex items-center ${
                isActive("/journey") 
                  ? "bg-emerald-900/30 text-emerald-300 border-l-4 border-emerald-400" 
                  : "text-gray-300 hover:bg-emerald-900/20"
              }`}
            >
              <SproutIcon className="h-4 w-4 mr-3" />
              Journey
            </button>
            <button
              onClick={() => navigate("/foundation")}
              className={`w-full text-left px-4 py-3 flex items-center ${
                isActive("/foundation") 
                  ? "bg-emerald-900/30 text-emerald-300 border-l-4 border-emerald-400" 
                  : "text-gray-300 hover:bg-emerald-900/20"
              }`}
            >
              <BuildingLibraryIcon  className="h-4 w-4 mr-3" />
              Foundation
            </button>
            <button
              onClick={() => navigate("/contact")}
              className={`w-full text-left px-4 py-3 flex items-center ${
                isActive("/contact") 
                  ? "bg-emerald-900/30 text-emerald-300 border-l-4 border-emerald-400" 
                  : "text-gray-300 hover:bg-emerald-900/20"
              }`}
            >
              <MailIcon className="h-4 w-4 mr-3" />
              Contact
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
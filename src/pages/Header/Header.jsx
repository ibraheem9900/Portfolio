import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaLaptopCode,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import faviconImage from "../../assets/images/favicon.ico";

export default function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(() => {
    const path = location.pathname.substring(1) || "home";
    return path;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { id: "home", icon: FaHome, text: "Home", path: "/" },
    { id: "skills", icon: FaCode, text: "Skills", path: "/skills" },
    {
      id: "experience",
      icon: FaBriefcase,
      text: "Experience",
      path: "/experience",
    },
    { id: "projects", icon: FaLaptopCode, text: "Projects", path: "/projects" },
    { id: "contact", icon: FaEnvelope, text: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900/95 backdrop-blur-md md:bg-transparent md:backdrop-blur-none border-b border-cyan-500/10 md:border-0">
        <div className="md:fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 w-full md:w-auto">
          <div className="p-0 md:p-[2px] md:rounded-full md:bg-gradient-to-r md:from-emerald-400 md:via-cyan-500 md:to-indigo-500 md:animate-gradient-x">
            <nav className="bg-transparent md:bg-gray-900/90 md:backdrop-blur-md md:rounded-full px-4 md:px-6 py-3 md:py-2.5">
              {/* Mobile Header */}
              <div className="flex justify-between items-center md:hidden">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
                  <img src={faviconImage} alt="Logo" className="w-8 h-8" />
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="relative w-10 h-10 flex items-center justify-center group"
                  aria-label="Toggle menu"
                >
                  <div className="relative w-6 h-5 flex flex-col justify-between">
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
                  </div>
                </button>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:block">
                <div className="flex flex-row items-center gap-1 lg:gap-2">
                  {navLinks.map(({ id, icon: Icon, text, path }) => (
                    <Link
                      key={id}
                      to={path}
                      onClick={() => setActiveLink(id)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium
                        transition-all duration-300 flex items-center gap-2
                        hover:bg-white/10 
                        ${
                          activeLink === id
                            ? "bg-white/15 text-white"
                            : "text-gray-300 hover:text-white"
                        }
                      `}
                    >
                      <Icon
                        className={`text-base ${
                          activeLink === id ? "scale-110" : ""
                        }`}
                      />
                      <span>{text}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 z-[100] md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`h-full flex flex-col transition-transform duration-500 ease-out ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Header with Logo and Close Button */}
          <div className="flex justify-between items-center p-6">
            <img src={faviconImage} alt="Logo" className="w-10 h-10" />
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-3xl hover:text-cyan-400 transition-colors p-2"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center gap-3 px-8 py-8">
            {navLinks.map(({ id, icon: Icon, text, path }, index) => (
              <Link
                key={id}
                to={path}
                onClick={() => {
                  setActiveLink(id);
                  setIsMenuOpen(false);
                }}
                className={`py-4 text-2xl font-medium
                  transition-all duration-300
                  hover:bg-white/5 hover:pl-6 pl-4 rounded-lg
                  ${
                    activeLink === id
                      ? "text-cyan-400"
                      : "text-white"
                  }
                  ${isMenuOpen ? 'animate-slide-in' : ''}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <Icon className="text-2xl" />
                  <span>{text}</span>
                </div>
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s linear infinite;
          background-size: 200% 200%;
        }
        
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.5s ease-out forwards;
          opacity: 0;
        }

        /* Animated Hamburger Menu */
        .hamburger-line {
          display: block;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #10b981, #06b6d4, #3b82f6);
          background-size: 200% 100%;
          border-radius: 2px;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation: gradient-flow 2s linear infinite;
          box-shadow: 0 0 8px rgba(6, 182, 212, 0.5);
        }

        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }

        .hamburger-line:nth-child(1) {
          animation-delay: 0s;
        }
        
        .hamburger-line:nth-child(2) {
          animation-delay: 0.15s;
        }
        
        .hamburger-line:nth-child(3) {
          animation-delay: 0.3s;
        }

        /* Hover Effect */
        button:hover .hamburger-line {
          box-shadow: 0 0 12px rgba(6, 182, 212, 0.8);
          transform: scaleX(1.1);
        }

        button:hover .hamburger-line:nth-child(1) {
          transform: scaleX(1.1) translateY(-1px);
        }

        button:hover .hamburger-line:nth-child(3) {
          transform: scaleX(1.1) translateY(1px);
        }

        /* Open State - Transform to X */
        .hamburger-line.open:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        .hamburger-line.open:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .hamburger-line.open:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }
      `}</style>
    </>
  );
}
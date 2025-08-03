import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect scroll position
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Detect screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleScroll();
    checkMobile(); // run on mount

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleDownloadCV = () => {
    alert('CV download functionality would be implemented here with your actual CV file.');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobile
          ? 'bg-black/90 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Sherherbano <span className="text-yellow-400">Faisal</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors duration-200"
            >
              <Download size={16} />
              <span>Download CV</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={handleDownloadCV}
                className="flex items-center space-x-2 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300 transition-colors duration-200 w-fit"
              >
                <Download size={16} />
                <span>Download CV</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

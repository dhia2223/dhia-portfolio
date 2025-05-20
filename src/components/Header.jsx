import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Icon } from '@iconify/react';
import { personalData } from '../constants/data';
import { Link } from 'react-scroll';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          {personalData.name}
        </a>
        
        {/* Desktop Navigation */}
        <nav className="navbar-desktop">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            activeClass="active"
            className="navbar-link"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            offset={-80}
            activeClass="active"
            className="navbar-link"
          >
            Skills
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-80}
            activeClass="active"
            className="navbar-link"
          >
            Projects
          </Link>
          <Link
            to="journey"
            smooth={true}
            duration={500}
            offset={-80}
            activeClass="active"
            className="navbar-link"
          >
          Journey
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            activeClass="active"
            className="navbar-link"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="md:hidden flex items-center">
          <button 
            className="navbar-mobile-button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon icon={mobileMenuOpen ? "ph:x-bold" : "ph:list-bold"} className="w-6 h-6" />
          </button>
        </div>

        {/* Theme and Resume - Hidden on mobile */}
        <div className="navbar-actions hidden md:flex">
          <button
            onClick={toggleTheme}
            className="navbar-theme-toggle"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <Icon icon="ph:sun-bold" className="w-5 h-5" />
            ) : (
              <Icon icon="ph:moon-bold" className="w-5 h-5" />
            )}
          </button>
          
          <a
            href={personalData.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume"
          >
            Resume
          </a>
        </div>

        {/* Mobile Navigation */}
        <div className={`navbar-mobile ${mobileMenuOpen ? 'open' : ''}`}>
          <nav className="navbar-mobile-nav">
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active"
              className="navbar-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active"
              className="navbar-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active"
              className="navbar-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              activeClass="active"
              className="navbar-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
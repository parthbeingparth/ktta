import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Youtube } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  onMenuClick: () => void;
  isMobileMenuOpen?: boolean;
  onMobileMenuClose?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isMobileMenuOpen = false, onMobileMenuClose = () => {} }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <>
      <header className="bg-[#291F4D] text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onMenuClick}
              className="text-white hover:bg-purple-800 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/685711070e2c0775c3004176_1751354157593_be944c26.png" 
                alt="KTTA Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                to="/" 
                className={`hover:text-pink-400 transition-colors ${
                  isActive('/') ? 'text-pink-400' : ''
                }`}
              >
                Home
              </Link>
              <Link 
                to="/results" 
                className={`hover:text-pink-400 transition-colors ${
                  isActive('/results') ? 'text-pink-400' : ''
                }`}
              >
                Results
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-pink-400 transition-colors ${
                  isActive('/about') ? 'text-pink-400' : ''
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/dashboard" 
                className={`hover:text-pink-400 transition-colors ${
                  isActive('/dashboard') ? 'text-pink-400' : ''
                }`}
              >
                Dashboard
              </Link>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </nav>
            <Link to="/login">
              <Button className="bg-pink-500 hover:bg-pink-600 text-white">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </header>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={onMobileMenuClose} 
      />
    </>
  );
};

export default Header;
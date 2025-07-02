import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Mobile Menu */}
      <div className="fixed top-0 left-0 w-64 h-full bg-[#291F4D] text-white z-50 transform transition-transform duration-300 ease-in-out md:hidden">
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <img 
              src="https://d64gsuwffb70l.cloudfront.net/685711070e2c0775c3004176_1751354157593_be944c26.png" 
              alt="KTTA Logo" 
              className="h-8 w-auto"
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-purple-800"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <nav className="space-y-4">
            <Link 
              to="/" 
              onClick={onClose}
              className={`block py-2 px-3 rounded hover:bg-purple-800 transition-colors ${
                isActive('/') ? 'bg-purple-800 text-pink-400' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/results" 
              onClick={onClose}
              className={`block py-2 px-3 rounded hover:bg-purple-800 transition-colors ${
                isActive('/results') ? 'bg-purple-800 text-pink-400' : ''
              }`}
            >
              Results
            </Link>
            <Link 
              to="/about" 
              onClick={onClose}
              className={`block py-2 px-3 rounded hover:bg-purple-800 transition-colors ${
                isActive('/about') ? 'bg-purple-800 text-pink-400' : ''
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/dashboard" 
              onClick={onClose}
              className={`block py-2 px-3 rounded hover:bg-purple-800 transition-colors ${
                isActive('/dashboard') ? 'bg-purple-800 text-pink-400' : ''
              }`}
            >
              Dashboard
            </Link>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center py-2 px-3 rounded hover:bg-purple-800 transition-colors"
            >
              <Youtube className="h-4 w-4 mr-2" />
              YouTube
            </a>
            <div className="pt-4 border-t border-purple-700">
              <Link 
                to="/login" 
                onClick={onClose}
                className="block w-full"
              >
                <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                  Login
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
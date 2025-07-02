import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#291F4D] text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/685711070e2c0775c3004176_1751354157593_be944c26.png" 
                alt="KTTA Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-slate-300 text-sm">
              Empowering table tennis excellence across Karnataka since 1985.
            </p>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-300 hover:text-pink-400 transition-colors">Tournaments</a></li>
              <li><a href="#" className="text-slate-300 hover:text-pink-400 transition-colors">Results</a></li>
              <li><a href="#" className="text-slate-300 hover:text-pink-400 transition-colors">Players</a></li>
              <li><a href="#" className="text-slate-300 hover:text-pink-400 transition-colors">Rankings</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-slate-300 hover:text-pink-400 transition-colors">Rules & Regulations</a></li>
              <li><a href="#" className="text-slate-300 hover:text-pink-400 transition-colors">Training Centers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-pink-400 transition-colors">Coaching</a></li>
              <li><a href="#" className="text-slate-300 hover:text-pink-400 transition-colors">Equipment</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact</h4>
            <div className="space-y-2 md:space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-pink-400 shrink-0" />
                <span className="text-slate-300 break-all">info@ktta.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-pink-400 shrink-0" />
                <span className="text-slate-300">+91 80 2234 5678</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-pink-400 mt-0.5 shrink-0" />
                <span className="text-slate-300">Bangalore, Karnataka</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-slate-400 text-xs md:text-sm">
            © 2024 Karnataka Table Tennis Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
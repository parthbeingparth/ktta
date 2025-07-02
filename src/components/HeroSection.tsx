import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Trophy, Users } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#291F4D] via-purple-800 to-indigo-900 text-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Where Champions Compete
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-purple-200 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Power your game with Karnataka's premier table tennis association. 
            Precision. Passion. Progress.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <Button size="lg" className="bg-[#291F4D] hover:bg-purple-700 text-white px-6 md:px-8 py-3 text-base md:text-lg w-full sm:w-auto">
              Register for Tournament
            </Button>
            <Button size="lg" variant="outline" className="border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-[#291F4D] px-6 md:px-8 py-3 text-base md:text-lg w-full sm:w-auto">
              View Results
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-16 px-4">
          <Card className="bg-[#1a1332] border-purple-700 p-4 md:p-6 hover:bg-[#1f1640] transition-all duration-300">
            <Calendar className="h-10 w-10 md:h-12 md:w-12 text-purple-300 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Upcoming Events</h3>
            <p className="text-sm md:text-base text-purple-200">State Championship 2024 - Registration open</p>
          </Card>
          
          <Card className="bg-[#1a1332] border-purple-700 p-4 md:p-6 hover:bg-[#1f1640] transition-all duration-300">
            <Trophy className="h-10 w-10 md:h-12 md:w-12 text-orange-400 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Latest Results</h3>
            <p className="text-sm md:text-base text-purple-200">District Finals completed - View winners</p>
          </Card>
          
          <Card className="bg-[#1a1332] border-purple-700 p-4 md:p-6 hover:bg-[#1f1640] transition-all duration-300">
            <Users className="h-10 w-10 md:h-12 md:w-12 text-green-400 mb-3 md:mb-4" />
            <h3 className="text-lg md:text-xl font-bold mb-2 text-white">Active Players</h3>
            <p className="text-sm md:text-base text-purple-200">1,200+ registered athletes competing</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
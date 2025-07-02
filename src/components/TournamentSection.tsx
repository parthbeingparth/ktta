import React from 'react';
import TournamentCard from './TournamentCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const mockTournaments = [
  {
    id: '1',
    name: 'Karnataka State Championship 2024',
    date: 'March 15-17, 2024',
    location: 'Bangalore Sports Complex',
    category: 'Open Category',
    participants: 128,
    status: 'upcoming' as const
  },
  {
    id: '2',
    name: 'District Junior Championship',
    date: 'March 8-10, 2024',
    location: 'Mysore TT Academy',
    category: 'Under-18',
    participants: 64,
    status: 'ongoing' as const
  },
  {
    id: '3',
    name: 'Veterans Cup 2024',
    date: 'February 25-26, 2024',
    location: 'Hubli Sports Center',
    category: 'Above 40',
    participants: 48,
    status: 'completed' as const
  }
];

const TournamentSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#291F4D] mb-2 md:mb-4">Upcoming Events</h2>
            <p className="text-base md:text-lg text-gray-600">Compete at the highest level</p>
          </div>
          <Button className="bg-[#291F4D] hover:bg-purple-700 text-white font-semibold w-full sm:w-auto">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {mockTournaments.map((tournament) => (
            <TournamentCard key={tournament.id} tournament={tournament} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TournamentSection;
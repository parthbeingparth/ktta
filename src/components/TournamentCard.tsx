import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users } from 'lucide-react';

interface Tournament {
  id: string;
  name: string;
  date: string;
  location: string;
  category: string;
  participants: number;
  status: 'upcoming' | 'ongoing' | 'completed';
}

interface TournamentCardProps {
  tournament: Tournament;
}

const TournamentCard: React.FC<TournamentCardProps> = ({ tournament }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-[#291F4D]';
      case 'ongoing': return 'bg-orange-500';
      case 'completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 h-full bg-[#1a1332]">
      <CardHeader className="pb-3">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
          <CardTitle className="text-base sm:text-lg font-bold text-white leading-tight">
            {tournament.name}
          </CardTitle>
          <Badge className={`${getStatusColor(tournament.status)} text-white text-xs shrink-0`}>
            {tournament.status}
          </Badge>
        </div>
        <p className="text-sm text-gray-300">{tournament.category}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center text-xs sm:text-sm text-gray-300">
            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-purple-400 shrink-0" />
            <span className="truncate">{tournament.date}</span>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-gray-300">
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-orange-400 shrink-0" />
            <span className="truncate">{tournament.location}</span>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-gray-300">
            <Users className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-green-400 shrink-0" />
            <span>{tournament.participants} participants</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 mt-4">
          <Button size="sm" className="bg-[#291F4D] hover:bg-purple-700 text-white font-semibold flex-1 text-xs sm:text-sm">
            View Details
          </Button>
          {tournament.status === 'upcoming' && (
            <Button size="sm" variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-900 text-xs sm:text-sm">
              Register
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TournamentCard;
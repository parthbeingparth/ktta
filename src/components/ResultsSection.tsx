import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Medal, Award } from 'lucide-react';

const mockResults = [
  {
    id: '1',
    tournament: 'State Championship 2024',
    winner: 'Rajesh Kumar',
    runnerUp: 'Priya Sharma',
    category: 'Men\'s Singles',
    score: '4-2',
    date: 'Feb 28, 2024'
  },
  {
    id: '2',
    tournament: 'Junior Championship',
    winner: 'Arjun Patel',
    runnerUp: 'Sneha Reddy',
    category: 'Under-18 Mixed',
    score: '4-1',
    date: 'Feb 25, 2024'
  },
  {
    id: '3',
    tournament: 'Veterans Cup',
    winner: 'Suresh Nair',
    runnerUp: 'Lakshmi Devi',
    category: 'Above 40',
    score: '4-3',
    date: 'Feb 20, 2024'
  }
];

const ResultsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#291F4D] mb-2 md:mb-4">Latest Results</h2>
          <p className="text-base md:text-lg text-gray-600">Celebrating our champions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {mockResults.map((result, index) => (
            <Card key={result.id} className="hover:shadow-lg transition-all duration-300 border-gray-200 h-full bg-[#1a1332]">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base sm:text-lg font-bold text-white leading-tight">{result.tournament}</CardTitle>
                  {index === 0 && <Trophy className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-500 shrink-0" />}
                  {index === 1 && <Medal className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 shrink-0" />}
                  {index === 2 && <Award className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 shrink-0" />}
                </div>
                <Badge variant="secondary" className="w-fit text-xs bg-purple-600 text-white">{result.category}</Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 sm:space-y-3">
                  <div className="bg-purple-800/50 p-2 sm:p-3 rounded-lg">
                    <p className="text-xs sm:text-sm font-medium text-gray-300">Winner</p>
                    <p className="text-sm sm:text-lg font-bold text-white truncate">{result.winner}</p>
                  </div>
                  <div className="bg-gray-800/50 p-2 sm:p-3 rounded-lg">
                    <p className="text-xs sm:text-sm font-medium text-gray-300">Runner-up</p>
                    <p className="text-sm sm:text-lg font-semibold text-gray-200 truncate">{result.runnerUp}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg sm:text-2xl font-bold text-white">{result.score}</span>
                    <span className="text-xs sm:text-sm text-gray-400">{result.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <Button className="bg-[#291F4D] hover:bg-purple-700 text-white font-semibold px-6 md:px-8 py-3 w-full sm:w-auto">
            View All Results
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
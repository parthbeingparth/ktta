import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TournamentBracket = () => {
  const matches = [
    { id: 1, player1: "Rajesh Kumar", player2: "Amit Patel", score: "3-1", winner: "Rajesh Kumar", round: "Final" },
    { id: 2, player1: "Priya Sharma", player2: "Suresh Nair", score: "3-2", winner: "Priya Sharma", round: "Semi-Final" },
    { id: 3, player1: "Vikram Singh", player2: "Kavya Reddy", score: "3-0", winner: "Vikram Singh", round: "Quarter-Final" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => {}} />
      
      <div className="bg-gradient-to-br from-slate-50 to-cyan-50 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-slate-600 hover:text-cyan-600 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-2">Tournament Bracket</h1>
            <p className="text-slate-600">Karnataka State Championship 2024</p>
          </div>

          <div className="space-y-6">
            {matches.map((match) => (
              <Card key={match.id} className="shadow-lg border-0">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-slate-800">{match.round}</CardTitle>
                    <Badge className="bg-cyan-500">{match.score}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-cyan-50 rounded-lg">
                    <div className="text-center flex-1">
                      <p className={`font-semibold ${match.winner === match.player1 ? 'text-green-600' : 'text-slate-600'}`}>
                        {match.player1}
                      </p>
                    </div>
                    <div className="mx-4">
                      <span className="text-2xl font-bold text-slate-400">VS</span>
                    </div>
                    <div className="text-center flex-1">
                      <p className={`font-semibold ${match.winner === match.player2 ? 'text-green-600' : 'text-slate-600'}`}>
                        {match.player2}
                      </p>
                    </div>
                  </div>
                  {match.winner && (
                    <div className="mt-4 text-center">
                      <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                        <Trophy className="h-4 w-4" />
                        Winner: {match.winner}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TournamentBracket;
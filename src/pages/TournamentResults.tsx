import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Search, Filter, Calendar, ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MatchesTable from "@/components/MatchesTable";
import { API_BASE_URL } from "@/lib/config";

interface Match {
  date: string;
  event_name: string;
  match_type: string;
  team1_players: string;
  team2_players: string;
  final_score: string;
  winner: string;
  sender_number: string;
  timestamp: string;
  game_scores?: string;
}

const TournamentResults = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/matches`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMatches(data.matches || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const tournaments = [
    {
      id: 1,
      name: "Karnataka State Championship 2024",
      date: "2024-01-15",
      status: "completed",
      category: "Senior",
      winner: "Rajesh Kumar",
      runnerUp: "Priya Sharma",
      participants: 64,
      prize: "₹50,000"
    },
    {
      id: 2,
      name: "Bangalore District Open",
      date: "2024-01-08",
      status: "completed",
      category: "Junior",
      winner: "Arjun Patel",
      runnerUp: "Sneha Reddy",
      participants: 32,
      prize: "₹25,000"
    }
  ];

  const filteredTournaments = tournaments.filter(tournament => {
    const matchesSearch = tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tournament.winner.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || tournament.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => {}} />
      
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-[#291F4D] mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#291F4D] mb-2">Match Results</h1>
            <p className="text-gray-600">Complete results from all KTTA tournaments</p>
          </div>

          <div className="mb-8">
            {loading && <p>Loading matches...</p>}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && <MatchesTable matches={matches} />}
          </div>

          <Card className="mb-8 shadow-lg border-0">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search tournaments or players..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                    <SelectItem value="junior">Junior</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTournaments.map((tournament) => (
              <Card key={tournament.id} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2 text-[#291F4D]">{tournament.name}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {tournament.date}
                        </div>
                        <Badge variant="secondary" className="bg-purple-100 text-[#291F4D]">{tournament.category}</Badge>
                      </div>
                    </div>
                    <Trophy className="h-8 w-8 text-yellow-500" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-yellow-800">Champion</p>
                          <p className="text-lg font-bold text-yellow-900">{tournament.winner}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-yellow-700">Prize Money</p>
                          <p className="text-lg font-bold text-yellow-900">{tournament.prize}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">Runner Up</p>
                          <p className="text-lg font-semibold text-[#291F4D]">{tournament.runnerUp}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Participants</p>
                          <p className="text-lg font-semibold text-[#291F4D]">{tournament.participants}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 border-[#291F4D] text-[#291F4D] hover:bg-purple-50">View Bracket</Button>
                      <Button className="flex-1 bg-[#291F4D] hover:bg-purple-700">Full Results</Button>
                    </div>
                  </div>
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

export default TournamentResults;
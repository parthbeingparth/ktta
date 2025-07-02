import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Calendar, Target, TrendingUp, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PlayerDashboard = () => {
  const playerStats = {
    name: "Rajesh Kumar",
    rank: "#12",
    totalMatches: 45,
    wins: 32,
    losses: 13,
    winRate: 71
  };

  const upcomingMatches = [
    { id: 1, opponent: "Priya Sharma", tournament: "State Championship", date: "2024-01-25", time: "10:00 AM" },
    { id: 2, opponent: "Amit Patel", tournament: "District Open", date: "2024-01-28", time: "2:30 PM" }
  ];

  const pastMatches = [
    { id: 1, opponent: "Suresh Reddy", result: "Won", score: "3-1", date: "2024-01-15", tournament: "City Cup" },
    { id: 2, opponent: "Kavya Nair", result: "Lost", score: "2-3", date: "2024-01-12", tournament: "Regional" },
    { id: 3, opponent: "Vikram Singh", result: "Won", score: "3-0", date: "2024-01-08", tournament: "Club Championship" }
  ];

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
            <h1 className="text-4xl font-bold text-[#291F4D] mb-2">Player Dashboard</h1>
            <p className="text-gray-600">Welcome back, {playerStats.name}!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-r from-[#291F4D] to-purple-700 text-white border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100">Current Rank</p>
                    <p className="text-3xl font-bold">{playerStats.rank}</p>
                  </div>
                  <Trophy className="h-8 w-8 text-purple-200" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">Total Matches</p>
                    <p className="text-3xl font-bold text-[#291F4D]">{playerStats.totalMatches}</p>
                  </div>
                  <Target className="h-8 w-8 text-gray-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">Wins</p>
                    <p className="text-3xl font-bold text-green-600">{playerStats.wins}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-green-400" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600">Win Rate</p>
                    <p className="text-3xl font-bold text-orange-600">{playerStats.winRate}%</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">{playerStats.winRate}%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white shadow-sm">
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-[#291F4D] data-[state=active]:text-white">Upcoming Matches</TabsTrigger>
              <TabsTrigger value="past" className="data-[state=active]:bg-[#291F4D] data-[state=active]:text-white">Match History</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-[#291F4D]">
                    <Calendar className="h-5 w-5 text-[#291F4D]" />
                    Upcoming Matches
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingMatches.map((match) => (
                      <div key={match.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border">
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#291F4D]">vs {match.opponent}</h3>
                          <p className="text-sm text-gray-600">{match.tournament}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium text-[#291F4D]">{match.date}</p>
                          <p className="text-sm text-gray-600">{match.time}</p>
                        </div>
                        <Button className="ml-4 bg-[#291F4D] hover:bg-purple-700">View Details</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="past" className="space-y-4">
              <Card className="shadow-lg border-0">
                <CardHeader>
                  <CardTitle className="text-[#291F4D]">Match History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pastMatches.map((match) => (
                      <div key={match.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border">
                        <div className="flex-1">
                          <h3 className="font-semibold text-[#291F4D]">vs {match.opponent}</h3>
                          <p className="text-sm text-gray-600">{match.tournament}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <Badge variant={match.result === "Won" ? "default" : "destructive"} className={match.result === "Won" ? "bg-green-500" : ""}>
                            {match.result}
                          </Badge>
                          <span className="font-mono text-sm text-gray-700">{match.score}</span>
                          <span className="text-sm text-gray-600">{match.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PlayerDashboard;
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users } from "lucide-react";

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
}

interface MatchesTableProps {
  matches: Match[];
}

const MatchesTable = ({ matches }: MatchesTableProps) => {

  if (matches.length === 0) {
    return (
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle className="text-2xl text-[#291F4D] flex items-center gap-2">
            <Trophy className="h-6 w-6" />
            Recent Matches
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-600">No matches found.</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-2xl text-[#291F4D] flex items-center gap-2">
          <Trophy className="h-6 w-6" />
          Recent Matches
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-purple-50">
                <TableHead className="text-[#291F4D] font-semibold">Date</TableHead>
                <TableHead className="text-[#291F4D] font-semibold">Event</TableHead>
                <TableHead className="text-[#291F4D] font-semibold">Type</TableHead>
                <TableHead className="text-[#291F4D] font-semibold">Team 1</TableHead>
                <TableHead className="text-[#291F4D] font-semibold">Team 2</TableHead>
                <TableHead className="text-[#291F4D] font-semibold">Score</TableHead>
                <TableHead className="text-[#291F4D] font-semibold">Winner</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {matches.map((match, index) => (
                <TableRow key={index} className="hover:bg-purple-25">
                  <TableCell className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    {match.date}
                  </TableCell>
                  <TableCell className="font-medium text-[#291F4D]">{match.event_name}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-[#291F4D] text-[#291F4D]">
                      <Users className="h-3 w-3 mr-1" />
                      {match.match_type}
                    </Badge>
                  </TableCell>
                  <TableCell>{match.team1_players}</TableCell>
                  <TableCell>{match.team2_players}</TableCell>
                  <TableCell className="font-mono font-semibold">{match.final_score}</TableCell>
                  <TableCell>
                    <Badge className="bg-[#291F4D] hover:bg-purple-700">
                      <Trophy className="h-3 w-3 mr-1" />
                      {match.winner}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default MatchesTable;
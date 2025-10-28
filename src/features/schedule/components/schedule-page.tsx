import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

interface Game {
  date: string;
  time: string;
  opponent: string;
  location: string;
  type: "home" | "away";
  result?: "win" | "loss" | "upcoming";
}

// Sample schedule data - replace with real data
const upcomingGames: Game[] = [
  {
    date: "2025-11-15",
    time: "14:00",
    opponent: "Leicester Legends",
    location: "Derby Sports Ground",
    type: "home",
    result: "upcoming",
  },
  {
    date: "2025-11-22",
    time: "15:30",
    opponent: "Nottingham Knights",
    location: "Nottingham Arena",
    type: "away",
    result: "upcoming",
  },
  {
    date: "2025-11-29",
    time: "13:00",
    opponent: "Sheffield Sharks",
    location: "Derby Sports Ground",
    type: "home",
    result: "upcoming",
  },
];

const pastGames: Game[] = [
  {
    date: "2025-10-18",
    time: "14:00",
    opponent: "Birmingham Bulls",
    location: "Birmingham Field",
    type: "away",
    result: "win",
  },
  {
    date: "2025-10-11",
    time: "15:00",
    opponent: "Manchester Mavericks",
    location: "Derby Sports Ground",
    type: "home",
    result: "loss",
  },
];

function GameCard({ game }: { game: Game }) {
  const date = new Date(game.date);
  const formattedDate = date.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">vs {game.opponent}</CardTitle>
          {game.type === "home" ? (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-ducks-green text-white">
              HOME
            </span>
          ) : (
            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-ducks-purple text-white">
              AWAY
            </span>
          )}
        </div>
        {game.result === "win" && (
          <span className="text-sm font-semibold text-green-600">Victory</span>
        )}
        {game.result === "loss" && (
          <span className="text-sm font-semibold text-red-600">Defeat</span>
        )}
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{formattedDate}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{game.time}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{game.location}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function SchedulePage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-ducks-green to-ducks-purple mb-6">
            <Calendar className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Schedule & Results
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Keep up with all our fixtures and see how the Ducks are performing
            this season
          </p>
        </div>

        {/* Upcoming Games */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Upcoming Fixtures
          </h2>
          {upcomingGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingGames.map((game, index) => (
                <GameCard key={index} game={game} />
              ))}
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>No Upcoming Games</CardTitle>
                <CardDescription>
                  Check back soon for our next fixtures!
                </CardDescription>
              </CardHeader>
            </Card>
          )}
        </div>

        {/* Past Games */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Recent Results
          </h2>
          {pastGames.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastGames.map((game, index) => (
                <GameCard key={index} game={game} />
              ))}
            </div>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>No Past Games</CardTitle>
                <CardDescription>
                  Our season is just getting started!
                </CardDescription>
              </CardHeader>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}

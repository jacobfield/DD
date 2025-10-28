import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";

const positions = [
  {
    name: "Quarterback",
    description:
      "Leads the offense, calls plays, and delivers accurate passes.",
  },
  {
    name: "Wide Receiver",
    description: "Runs routes, catches passes, and scores touchdowns.",
  },
  {
    name: "Running Back",
    description: "Versatile player who can catch passes and run with the ball.",
  },
  {
    name: "Center",
    description: "Snaps the ball to start each play and can run routes.",
  },
  {
    name: "Defensive Back",
    description: "Covers receivers and attempts to intercept passes.",
  },
  {
    name: "Rusher",
    description: "Applies pressure on the quarterback and disrupts plays.",
  },
];

export function TeamPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-ducks-green to-ducks-purple mb-6">
            <Users className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the Flock
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team is made up of dedicated athletes who share a passion for
            flag football and representing Derby with pride.
          </p>
        </div>

        {/* Team Description */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-ducks-green/5 to-ducks-purple/5">
            <CardHeader>
              <CardTitle className="text-2xl">Our Squad</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                The Derbyshire Ducks roster features a diverse group of players,
                from seasoned veterans to enthusiastic newcomers. Each member
                brings unique skills, energy, and dedication to the team.
              </p>
              <p className="text-gray-600">
                We believe in creating opportunities for everyone to contribute,
                whether you're a star receiver, a shutdown defender, or a
                strategic quarterback. Our coaching staff works with each player
                to develop their skills and help them reach their full
                potential.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Positions Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Positions We Play
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {positions.map((position) => (
              <Card
                key={position.name}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-ducks-purple">
                    {position.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {position.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Section */}
        <div>
          <Card className="border-2 border-ducks-gold">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Want to Join the Team?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                We're always looking for passionate players to join our roster.
                Whether you're an experienced flag football player or completely
                new to the sport, we welcome players of all skill levels.
              </p>
              <p className="text-gray-600">
                Training sessions focus on developing skills, understanding
                strategy, and building team chemistry. Our experienced coaches
                and supportive teammates will help you improve and enjoy the
                game.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

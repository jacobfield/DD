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
      "The field general who orchestrates the offense. Responsible for reading the defense, calling audibles, and delivering precise passes to receivers. In flag football, quarterbacks must have quick decision-making skills and accuracy, as they typically have just 7 seconds to release the ball before the play is blown dead.",
  },
  {
    name: "Running Back",
    description:
      "A dynamic, versatile player who lines up behind or beside the quarterback. Running backs are key receivers out of the backfield, running short routes and serving as safety valves for the QB. They excel at catching passes in traffic, making defenders miss, and gaining yards after the catch.",
  },
  {
    name: "Wide Receiver",
    description:
      "Speed merchants and route runners who create separation from defenders to catch passes. Wide receivers must master various route concepts, have reliable hands, and possess the agility to make cuts at full speed. They're the primary scoring threats in flag football, responsible for stretching the field vertically and horizontally.",
  },
  {
    name: "Blitzer",
    description:
      "The defensive disruptor who rushes the quarterback after a mandatory count (typically 7 seconds). Blitzers use speed and technique to pressure the QB, force hurried throws, and create turnovers. Only one rusher is allowed per play in most flag football rules, making this position crucial for defensive success.",
  },
  {
    name: "Defensive Back",
    description:
      "Defensive playmakers who cover receivers and protect against the pass. DBs must have excellent footwork, read the quarterback's eyes, and react quickly to break on the ball. They're responsible for pulling flags to stop the offense and can change the game with interceptions and deflections.",
  },
  {
    name: "Linebacker",
    description:
      "The defensive quarterbacks who read plays, communicate coverage assignments, and patrol the middle of the field. Linebackers must balance defending against short routes while preventing receivers from getting deep. They're often the most versatile defenders, capable of covering any offensive position.",
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
            flag football and representing Derbyshire and Chesterfield with
            pride.
          </p>
        </div>

        {/* Team Photo Placeholder */}
        <div className="mb-16">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-[21/9] bg-gradient-to-r from-ducks-green via-ducks-purple to-ducks-gold flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                Team Roster Photo Placeholder
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-lg">
                Full team photo - Show off the championship squad!
              </p>
            </div>
          </div>
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
                className="hover:shadow-lg transition-shadow border-l-4 border-l-ducks-purple"
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

        {/* Action Photos Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Game Day Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-ducks-green to-ducks-purple/80 flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  Offense in Action
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm">
                  Add action photos of your offense making plays!
                </p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-ducks-purple to-ducks-gold/80 flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  Defense Dominating
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white text-sm">
                  Showcase your defense making stops and creating turnovers!
                </p>
              </div>
            </div>
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

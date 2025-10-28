import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Target, Shield, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in every play, every practice, and every game.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We play with honor, respect our opponents, and uphold the spirit of the game.",
  },
  {
    icon: Zap,
    title: "Passion",
    description:
      "Our love for flag football drives us to give our all on and off the field.",
  },
];

export function AboutPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img
              src="/derbyshire-ducks.jpg"
              alt="Derbyshire Ducks Logo"
              className="h-32 w-32 rounded-full object-cover shadow-2xl border-4 border-ducks-gold"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About the <span className="text-ducks-green">Derbyshire</span>{" "}
            <span className="text-ducks-purple">Ducks</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a flag football team – we're a family united by
            our passion for the game and our pride in representing Derbyshire
            and Chesterfield.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <Card className="border-2 border-ducks-gold shadow-lg">
            <CardHeader className="bg-gradient-to-r from-ducks-green/10 to-ducks-purple/10">
              <CardTitle className="text-2xl text-ducks-purple">
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">
                The Derbyshire Ducks were founded with a simple mission: to
                bring the excitement of flag American football to Derbyshire and
                Chesterfield, creating a welcoming community for players of all
                skill levels.
              </p>
              <p className="text-gray-600 mb-4">
                In our very first year of competitive play, we achieved what
                many teams take years to accomplish – we claimed the{" "}
                <strong>
                  Outlaw Flag League (OFL) Division 2 Championship
                </strong>
                . This historic victory showcases the dedication, talent, and
                team spirit that defines the Derbyshire Ducks.
              </p>
              <p className="text-gray-600 mb-4">
                Based in Chesterfield, we've grown from a small group of
                enthusiasts into a championship-winning team that represents
                Derbyshire with pride. Our commitment to developing players,
                fostering teamwork, and promoting the sport has been at the
                heart of everything we do.
              </p>
              <p className="text-gray-600">
                Today, as reigning champions, we continue to welcome new
                members, compete at the highest levels, and serve as ambassadors
                for flag football in our community.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Photo Placeholder */}
        <div className="mb-16">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gradient-to-br from-ducks-green via-ducks-purple to-ducks-gold flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                Team Photo Placeholder
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-lg">
                Add your team photo here - Championship celebration, training
                session, or game day!
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="text-center hover:shadow-xl transition-all border-2 border-ducks-gold/30 hover:border-ducks-gold"
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-ducks-green to-ducks-purple flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-ducks-purple">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* What is Flag Football Section */}
        <div>
          <Card className="bg-gradient-to-br from-ducks-purple/10 to-ducks-green/10 border-2 border-ducks-purple/30">
            <CardHeader className="bg-gradient-to-r from-ducks-green/20 to-ducks-purple/20">
              <CardTitle className="text-2xl text-ducks-green">
                What is Flag Football?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Flag football is a variant of American football where, instead
                of tackling players to the ground, the defensive team must
                remove a flag or flag belt from the ball carrier to end a down.
              </p>
              <p className="text-gray-600">
                It's a fast-paced, strategic game that emphasizes speed,
                agility, and teamwork over physical contact. This makes it
                accessible to players of all ages and abilities while
                maintaining the excitement and competitive spirit of traditional
                football.
              </p>
              <p className="text-gray-600">
                The sport has been growing rapidly in the UK, with more teams,
                leagues, and tournaments emerging every year. Flag football is
                even set to debut at the 2028 Summer Olympics!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

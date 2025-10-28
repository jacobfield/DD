import { Link } from "react-router-dom";
import { Trophy, Users, Calendar, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Trophy,
    title: "Competitive Excellence",
    description:
      "Competing at the highest level of flag football with dedication and skill.",
  },
  {
    icon: Users,
    title: "Team Spirit",
    description:
      "Building camaraderie and friendship both on and off the field.",
  },
  {
    icon: Calendar,
    title: "Regular Games",
    description:
      "Exciting matches throughout the season across various competitions.",
  },
  {
    icon: Heart,
    title: "Community Focus",
    description:
      "Representing Derby with pride and engaging with our local community.",
  },
];

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ducks-green via-ducks-purple to-ducks-green py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl text-center">
          <div className="flex justify-center mb-6">
            <img
              src="/derbyshire-ducks.jpg"
              alt="Derbyshire Ducks Logo"
              className="h-32 w-32 rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Derbyshire Ducks
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Derby's Premier Flag American Football Team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-ducks-gold text-black hover:bg-ducks-gold/90"
            >
              <Link to="/contact">Join the Flock</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white hover:bg-white/20"
            >
              <Link to="/schedule">View Schedule</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We're About
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              More than just a team, we're a community united by our love for
              flag football
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-ducks-purple/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-ducks-purple" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-ducks-green to-ducks-purple">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join the Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you're an experienced player or new to flag football, we
            welcome all skill levels!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-ducks-gold text-black hover:bg-ducks-gold/90"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

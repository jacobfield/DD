import { Link } from "react-router-dom";
import { Trophy, Users, Calendar, Heart, Instagram } from "lucide-react";
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
      <section className="relative bg-gradient-to-br from-ducks-green via-ducks-purple to-ducks-gold py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-7xl text-center">
          <div className="flex justify-center mb-8">
            <img
              src="/derbyshire-ducks.jpg"
              alt="Derbyshire Ducks Logo"
              className="h-40 w-40 object-contain drop-shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Derbyshire Ducks
          </h1>
          <div className="inline-block bg-ducks-gold text-black px-6 py-3 rounded-lg mb-6 font-bold text-xl shadow-lg">
            🏆 2025 OFL Division 2 Champions! 🏆
          </div>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Chesterfield's Premier Flag American Football Team
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

      {/* Championship Celebration Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-ducks-green/5 to-ducks-purple/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-ducks-green via-ducks-purple to-ducks-gold bg-clip-text text-transparent mb-6">
              Champions in Our First Year!
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              In our inaugural season competing in the Outlaw Flag League, the
              Derbyshire Ducks claimed the Division 2 Championship title. This
              historic achievement marks the beginning of our legacy!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-ducks-green/20 hover:border-ducks-green transition-all">
              <div className="aspect-video bg-gradient-to-br from-ducks-green to-ducks-purple flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  Championship Game Photo
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  Add your championship celebration photo here
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-ducks-purple/20 hover:border-ducks-purple transition-all">
              <div className="aspect-video bg-gradient-to-br from-ducks-purple to-ducks-gold flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  Trophy Presentation
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  Add your trophy celebration photo here
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-ducks-gold/20 hover:border-ducks-gold transition-all">
              <div className="aspect-video bg-gradient-to-br from-ducks-gold to-ducks-green flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  Team Celebration
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  Add your team celebration photo here
                </p>
              </div>
            </div>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-ducks-green via-ducks-purple to-ducks-gold">
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
            className="bg-ducks-gold text-black hover:bg-ducks-gold/90 shadow-lg"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Follow Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Stay up to date with our latest games, training sessions, and team
              moments
            </p>
            <a
              href="https://www.instagram.com/derbyshire_ducks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-ducks-purple hover:text-ducks-purple/80 font-semibold text-lg"
            >
              <Instagram className="h-6 w-6 mr-2" />
              @derbyshire_ducks
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-ducks-green via-ducks-purple to-ducks-gold rounded-lg flex items-center justify-center"
              >
                <span className="text-white text-sm font-semibold">
                  Instagram Post {i}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 bg-white p-4 rounded-lg inline-block">
              📸 To integrate your actual Instagram feed, you can use services
              like{" "}
              <a
                href="https://embedsocial.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ducks-purple hover:underline"
              >
                EmbedSocial
              </a>
              ,{" "}
              <a
                href="https://www.instagram.com/developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ducks-purple hover:underline"
              >
                Instagram Basic Display API
              </a>
              , or{" "}
              <a
                href="https://elfsight.com/instagram-feed-instashow/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ducks-purple hover:underline"
              >
                Elfsight
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

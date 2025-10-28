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
      <section className="relative bg-gradient-to-br from-ducks-green via-ducks-purple to-ducks-gold py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative mx-auto max-w-7xl text-center">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-ducks-gold rounded-full blur-xl group-hover:blur-2xl transition-all" />
              <img
                src="/derbyshire-ducks.jpg"
                alt="Derbyshire Ducks Logo"
                className="relative h-48 w-48 object-contain drop-shadow-2xl transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold font-sports text-white mb-6 tracking-wider transform hover:scale-105 transition-transform">
            DERBYSHIRE DUCKS
          </h1>
          <div className="inline-block bg-ducks-gold text-black px-8 py-4 rounded-lg mb-8 font-bold text-2xl shadow-2xl transform hover:scale-105 transition-all">
            🏆 2025 OFL DIV 2 CHAMPIONS! 🏆
          </div>
          <p className="text-2xl md:text-3xl text-white/95 mb-10 max-w-3xl mx-auto font-display font-semibold">
            Chesterfield's Premier Flag Football Team
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-ducks-gold text-black hover:bg-ducks-gold/90 font-display font-bold text-lg uppercase tracking-wide shadow-2xl hover:shadow-ducks-gold/50 transform hover:scale-110 transition-all"
            >
              <Link to="/contact">Join the Flock</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-2 border-white hover:bg-white hover:text-ducks-purple font-display font-bold text-lg uppercase tracking-wide backdrop-blur-sm transform hover:scale-110 transition-all"
            >
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Championship Celebration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-ducks-green/5 to-ducks-purple/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ducks-green via-ducks-purple to-ducks-gold" />
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-6xl inline-block">🏆</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold font-sports bg-gradient-to-r from-ducks-green via-ducks-purple to-ducks-gold bg-clip-text text-transparent mb-8 tracking-wider">
              CHAMPIONS IN OUR FIRST YEAR!
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-display">
              In our inaugural season competing in the Outlaw Flag League, the
              Derbyshire Ducks claimed the Division 2 Championship title. This
              historic achievement marks the beginning of our legacy!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-ducks-green/20 hover:border-ducks-green transform hover:scale-105 hover:-rotate-1 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-ducks-green to-ducks-purple flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <span className="relative text-white text-xl font-bold font-display z-10">
                  Championship Game Photo
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 font-medium">
                  Add your championship celebration photo here
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-ducks-purple/20 hover:border-ducks-purple transform hover:scale-105 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-ducks-purple to-ducks-gold flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <span className="relative text-white text-xl font-bold font-display z-10">
                  Trophy Presentation
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 font-medium">
                  Add your trophy celebration photo here
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-ducks-gold/20 hover:border-ducks-gold transform hover:scale-105 hover:rotate-1 transition-all duration-300 group">
              <div className="aspect-video bg-gradient-to-br from-ducks-gold to-ducks-green flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                <span className="relative text-white text-xl font-bold font-display z-10">
                  Team Celebration
                </span>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 font-medium">
                  Add your team celebration photo here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-ducks-purple/10 to-gray-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-sports text-white mb-6 tracking-wider">
              WHAT WE'RE ABOUT
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-display">
              More than just a team, we're a community united by our love for
              flag football
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="hover:shadow-2xl hover:shadow-ducks-purple/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 bg-gray-800/50 backdrop-blur-sm border-2 border-ducks-purple/20 hover:border-ducks-purple group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-ducks-green to-ducks-purple flex items-center justify-center mb-4 transform group-hover:rotate-12 transition-transform shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-display text-white group-hover:text-ducks-gold transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-ducks-green via-ducks-purple to-ducks-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-bold font-sports text-white mb-8 tracking-wider">
            READY TO JOIN THE TEAM?
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-10 font-display font-semibold">
            Whether you're an experienced player or new to flag football, we
            welcome all skill levels!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-ducks-purple hover:bg-gray-100 shadow-2xl font-display font-bold text-xl uppercase tracking-wide px-12 py-8 transform hover:scale-110 transition-all"
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

import { Link, useLocation } from "react-router-dom";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  // { name: "Schedule", href: "/schedule" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-ducks-gold">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img
                  src="/derbyshire-ducks.jpg"
                  alt="Derbyshire Ducks Logo"
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-ducks-gold group-hover:ring-4 transition-all"
                />
              </div>
              <div className="text-3xl font-bold font-sports tracking-wider">
                <span className="text-ducks-green">DERBYSHIRE</span>{" "}
                <span className="text-ducks-purple">DUCKS</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-base font-display font-semibold transition-all hover:text-ducks-purple hover:scale-110 uppercase tracking-wide",
                  location.pathname === item.href
                    ? "text-ducks-purple font-bold border-b-2 border-ducks-purple"
                    : "text-gray-700"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-ducks-purple/10 transition-all hover:scale-110"
            >
              <a
                href="https://www.instagram.com/derbyshire_ducks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-ducks-purple" />
              </a>
            </Button>
            <Button
              asChild
              className="bg-ducks-green hover:bg-ducks-green/90 text-white font-display font-bold uppercase tracking-wide shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link to="/contact">Join Us</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

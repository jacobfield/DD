import { Link, useLocation } from "react-router-dom";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Schedule", href: "/schedule" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/derbyshire-ducks.jpg"
                alt="Derbyshire Ducks Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="text-2xl font-bold">
                <span className="text-ducks-green">Derbyshire</span>{" "}
                <span className="text-ducks-purple">Ducks</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-ducks-purple",
                  location.pathname === item.href
                    ? "text-ducks-purple"
                    : "text-gray-700"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.instagram.com/derbyshire_ducks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild>
              <Link to="/contact">Join Us</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}

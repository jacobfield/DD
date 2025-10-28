import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Schedule", href: "/schedule" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/derbyshire-ducks.jpg"
                alt="Derbyshire Ducks Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold">
                <span className="text-ducks-green">Derbyshire</span>{" "}
                <span className="text-ducks-purple">Ducks</span>
              </h3>
            </div>
            <p className="text-sm text-gray-600">
              Derby's premier flag American football team. Passionate players,
              competitive spirit, and community pride.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-600 hover:text-ducks-purple transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Connect
            </h3>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/derbyshire_ducks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-600 hover:text-ducks-purple transition-colors"
              >
                <Instagram className="h-4 w-4 mr-2" />
                @derbyshire_ducks
              </a>
              <a
                href="mailto:derbyshireducks@gmail.com"
                className="flex items-center text-sm text-gray-600 hover:text-ducks-purple transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                derbyshireducks@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} Derbyshire Ducks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

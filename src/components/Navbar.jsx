import { useState } from "react";
import { FaLanguage } from "react-icons/fa";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "About Us", href: "#", isActive: true },
    { name: "Earn With Garibook", href: "#" },
    { name: "Garibook Business", href: "#" },
    { name: "Garibook Club", href: "#" },
    { name: "Campaign", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white">
      {/* Top row: English button, right aligned */}
      <div className="flex justify-end px-6 md:px-10 pt-3">
        <button className="flex items-center gap-1.5 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 whitespace-nowrap -mr-6">
          <span className="text-xl"><FaLanguage /></span> English
        </button>
      </div>

      {/* Main row: logo + nav + login */}
      <div className="px-6 md:px-12 pt-3 pb-6">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="lg:hidden text-2xl mr-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>

            <img
              src="https://garibook.com/assets/images/gaibook-logo.svg"
              alt="Garibook Logo"
              className="w-30 md:w-40 h-auto object-contain"
            />
          </div>

          {/* Nav Links + Login (same row, right side) */}
          <div className="hidden lg:flex items-center gap-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-[18px] font-medium pb-1 transition-colors whitespace-nowrap ${
                  item.isActive
                    ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                    : "text-black hover:text-blue-600"
                }`}
              >
                {item.name}
              </a>
            ))}

            <button className="bg-blue-600 text-white font-semibold px-7 py-2 rounded-lg text-base hover:bg-blue-700 transition-colors">
              login
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden px-6 pt-4 pb-4 border-t border-gray-100">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`block w-full text-lg py-2 ${
                item.isActive
                  ? "text-blue-600 font-semibold"
                  : "text-black hover:text-blue-600"
              }`}
            >
              {item.name}
            </a>
          ))}
          <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg mt-3">
            login
          </button>
        </div>
      )}
    </header>
  );
};

export default NavigationBar;
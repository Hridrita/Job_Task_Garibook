import nrbLogo from "../assets/nrb_no_background.svg"; 
import link3Logo from "../assets/link3-two.png"; 
import garibookLogo from "../assets/logo-vector.png"; 
import paymentBanner from "../assets/ssl.png"; 
import Container from "./Container";

const Footer = () => {
  // Smooth Left-to-Right Underline Animation Class
  const animatedLinkClass = 
    "relative inline-block text-gray-300 hover:text-[#ffd200] transition-colors duration-300 " +
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#ffd200] " +
    "after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300";

  return (
    <footer className="w-full bg-black text-white pt-16 font-sans">
      <Container>
        {/* Top Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Column 1: Brand Info */}
          <div>
            <h3 className="text-xl font-bold mb-5 tracking-wide">garibook</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li><a href="#about" className={animatedLinkClass}>About Us</a></li>
              <li><a href="#reviews" className={animatedLinkClass}>Customer Reviews</a></li>
              <li><a href="#career" className={animatedLinkClass}>Career</a></li>
              <li><a href="#newsroom" className={animatedLinkClass}>Newsroom</a></li>
              <li><a href="#map" className={animatedLinkClass}>Garibook Map</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xl font-bold mb-5 tracking-wide">Services</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li><a href="#intercity" className={animatedLinkClass}>Intercity Rental</a></li>
              <li><a href="#airport" className={animatedLinkClass}>Airport Pick and Drop</a></li>
              <li><a href="#hourly" className={animatedLinkClass}>Hourly Rental</a></li>
              <li><a href="#vms" className={animatedLinkClass}>Vehicle Management System (VMS)</a></li>
            </ul>
          </div>

          {/* Column 3: Become Our Partner */}
          <div>
            <h3 className="text-xl font-bold mb-5 tracking-wide">Become Our Partner</h3>
            <ul className="space-y-3 text-sm md:text-base">
              <li><a href="#smart-driver" className={animatedLinkClass}>Become a Smart Driver</a></li>
              <li><a href="#club" className={animatedLinkClass}>Become a member of Garibook Club</a></li>
              <li><a href="#corporate" className={animatedLinkClass}>Garibook Business for Corporate Travel</a></li>
            </ul>
          </div>

          {/* Column 4: Contacts */}
          <div>
            <h3 className="text-xl font-bold mb-5 tracking-wide">Contacts</h3>
            <div className="space-y-3 text-sm md:text-base">
              <p>
                <a href="mailto:support@garibook.com" className={animatedLinkClass}>
                  support@garibook.com
                </a>
              </p>
              <p className="leading-relaxed text-gray-300">
                Police Plaza Concord Tower <br />
                -01, 13th Floor, Plot-02, Road-144, Gulshan, Dhaka-1212
              </p>
              <p className="font-semibold text-white pt-1">+88 09 678 11 22 33</p>
            </div>
          </div>
        </div>

        {/* Middle Section: App Download & Partnerships */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pb-16 border-b border-gray-800">
          {/* Download App CTA */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
              Download Our <br />
              Garibook Mobile App
            </h2>
            <a
              href="#download"
              className="inline-flex items-center gap-3 bg-[#0e53ff] hover:bg-blue-700 text-white font-semibold px-7 py-3.5 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-600/30"
            >
              <span>Download App</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Partners Right Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start pt-4 lg:pt-0">
            {/* Product By */}
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-4">A Product By</h4>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center">
                  <img src={nrbLogo} alt="NRB Solution Ltd." className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-semibold text-base text-white">NRB Solution Ltd.</p>
                  <a href="https://nrbsolution.com" target="_blank" rel="noreferrer" className="text-yellow-400 text-sm font-semibold hover:underline flex items-center gap-1 mt-0.5">
                    Visit Website &rarr;
                  </a>
                </div>
              </div>
            </div>

            {/* Powered By */}
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-4">Powered By</h4>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white p-1 rounded">
                  <img src={link3Logo} alt="Link 3 Technologies" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-semibold text-base text-white">Link 3 Technologies</p>
                  <a href="https://link3.net" target="_blank" rel="noreferrer" className="text-yellow-400 text-sm font-semibold hover:underline flex items-center gap-1 mt-0.5">
                    Visit Website &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 pb-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
          {/* Logo & Legal Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 justify-center md:justify-start">
            {/* Fixed Logo + Text Group */}
            <a href="/" className="flex items-center gap-2">
              <img src={garibookLogo} alt="garibook logo" className="h-7 w-auto object-contain" />
              <span className="text-xl font-bold text-white tracking-wide">garibook</span>
            </a>
            <a href="#terms" className={animatedLinkClass}>Terms &amp; Conditions</a>
            <a href="#privacy" className={animatedLinkClass}>Privacy Policy</a>
          </div>

          {/* Trade License */}
          <div className="text-center md:text-left">
            <p>Trade license number:</p>
            <p className="text-gray-300 font-medium">TRAD/DNCC/013806/2024</p>
          </div>

          {/* Copyright */}
          <div>
            <p>&copy; 2026 Garibook.com</p>
          </div>
        </div>
      </Container>

      {/* Full Width Payment Gateway Banner */}
      <div className="w-full bg-white flex justify-center items-center py-2">
        <img src={paymentBanner} alt="Payment Options" className="w-full h-auto object-cover max-h-16" />
      </div>
    </footer>
  );
};

export default Footer;
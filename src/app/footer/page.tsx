export default function Footer() {
    return (
      <footer className="bg-teal-700 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-center md:text-left">
          {/* Clinic Info */}
          <div>
            <h3 className="text-xl font-bold mb-3">DermaGlow Clinic</h3>
            <p className="text-sm text-gray-200">
              Expert dermatology and skin care treatments for radiant confidence.
            </p>
          </div>
  
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a href="/" className="hover:text-yellow-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-300">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-yellow-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
  
          {/* Socials */}
          <div>
            <h4 className="font-semibold mb-3">Follow Us</h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#" className="hover:text-yellow-300">
                🌐
              </a>
              <a href="#" className="hover:text-yellow-300">
                📘
              </a>
              <a href="#" className="hover:text-yellow-300">
                📸
              </a>
            </div>
          </div>
        </div>
  
        <div className="mt-8 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} DermaGlow Clinic. All rights reserved.
        </div>
      </footer>
    );
  }
  
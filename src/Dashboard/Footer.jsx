import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto ">
          {/* About Section */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">City Maya</h3>
            <p className="text-gray-400">
              Your trusted local business directory. Discover the best shops,
              services, and businesses in your city.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <span>Bhiwandi, Maharashtra, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>info@citymaya.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} City Maya. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="/privacy" className="hover:text-blue-500 transition">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="/terms" className="hover:text-blue-500 transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

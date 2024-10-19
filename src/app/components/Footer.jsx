import Logo from "../images/pngegg (9).png";

export default function Footer() {
  return (
    <footer id="footer" className="bg-blue-600 text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col">
          <img
            src={Logo.src}
            alt="HR Solutions Logo"
            className="mb-4 w-20 p-2 ml-10 bg-white rounded-lg"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="/about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h3 className="text-lg font-semibold mb-4">FAQ</h3>
          <ul>
            <li>
              <a href="/faq#general" className="hover:underline">
                General Questions
              </a>
            </li>
            <li>
              <a href="/faq#support" className="hover:underline">
                Support
              </a>
            </li>
            <li>
              <a href="/faq#account" className="hover:underline">
                Account Management
              </a>
            </li>
            <li>
              <a href="/faq#billing" className="hover:underline">
                Billing
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Links and Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <a href="#" className="hover:underline">
              Twitter
            </a>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
          </div>

          {/* Contact Us */}
          <h3 className="text-lg font-semibold mt-6 mb-4">Contact Us</h3>
          <p>Phone: (123) 456-7890</p>
          <p>Email: support@hrsolutions.com</p>
          <p>123 Main St, City, Country</p>
        </div>
      </div>

      {/* Footer Bottom with Copyright */}
      <div className="border-t border-white mt-8 pt-4 text-center">
        <p>&copy; 2024 HR Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

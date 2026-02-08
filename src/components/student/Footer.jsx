
import { HiOutlineBolt } from "react-icons/hi2";
const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-400 py-12 px-4 md:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Section: Logo and Description */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            {/* Replace with your logo asset */}
            <button className=" w-10 h-10 rounded-full bg-white p-2">
              <HiOutlineBolt className="w-full h-full text-blue-600" />
            </button>
            NextGen
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Middle Section: Company Links */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-semibold text-lg">Company</h2>
          <ul className="flex flex-col gap-3 text-sm">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">
              About us
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Contact us
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Privacy policy
            </li>
          </ul>
        </div>

        {/* Right Section: Newsletter */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white font-semibold text-lg">
            Subscribe to our newsletter
          </h2>
          <p className="text-sm">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 border border-gray-700 text-white px-4 py-2
               rounded-md outline-none focus:border-blue-500 grow"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
        <p>Copyright 2026 © Nextgen. All Right Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

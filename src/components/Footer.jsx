import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white to-blue-100 text-gray-800 dark:text-gray-300 py-16 relative">
            <div className="flex items-center mb-4">
            <img
              src="https://cdn-icons-gif.flaticon.com/7211/7211809.gif"
              alt="Logo"
              className="mr-2 w-10 h-10 ml-10 rounded-full"
            />
            <h1 className="text-2xl font-bold text-black">Socialplus</h1>
          </div>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-semibold text-gray-900">Want to partner with us?</h1>
            <p className="mt-4 max-w-md text-gray-600">
              If you're interested in our partnerships and would like to find out more information, one of our advisors is excited to help.
            </p>
           <a href='#'><button className="mt-6 px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-200">
              Get in Touch
            </button></a>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-16 text-center lg:text-left mt-10 lg:mt-0">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Socialplus</h2>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition">Post</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Services</h2>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition">Games</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition">Publishing</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition">Solutions</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Events</h2>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition">CVR</a></li>
                <li><a href="#" className="text-gray-600 hover:text-blue-500 transition">Game Jams</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Follow</h2>
              <div className="flex space-x-4 justify-center lg:justify-start">
                <a href="#" className="text-blue-500 hover:text-blue-600"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-blue-800 hover:text-blue-900"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-red-500 hover:text-red-600"><i className="fab fa-youtube"></i></a>
                <a href="#" className="text-pink-600 hover:text-pink-700"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600 mt-10 border-t border-gray-300 pt-6">
          <div className="flex justify-center space-x-8 mb-4">
            <a href="#" className="hover:text-blue-500">Terms & Conditions</a>
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500">Sitemap</a>
          </div>
          <p>© 2024 Socialplus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


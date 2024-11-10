import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black/10 bg-black/10 bg-black/10 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between break-words md:flex-row">
          <div className="flex ">

            <img
              src="https://cdn-icons-gif.flaticon.com/7211/7211809.gif"
              alt="Logo"
              className="mr-2 w-10 h-10 rounded-full" // Adjust the size here
            />

            <h1 className="text-2xl font-bold text-gray/20 mb-4 ">SS͜͡o͜͡c͜͡i͜͡a͜͡l͜͡p͜͡l͜͡u͜͡s͜͡</h1>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray/20 mb-4">SS͜͡o͜͡c͜͡i͜͡a͜͡l͜͡p͜͡l͜͡u͜͡s͜͡</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">About</a></li>
              <li className="mb-2"><a href="faq.jsx" className="hover:text-orange-500">FAQ's</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Post</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray/20 mb-4">SERVICES</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Games</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Publishing</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Solutions</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray/20 mb-4">EVENTS</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">CVR</a></li>
              <li className="mb-2"><a href="#" className="hover:text-orange-500">Game Jams</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray/20 mb-4">FOLLOW</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-cyan-500"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="hover:text-sky-700"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-red-500"><i className="fab fa-youtube"></i></a>
              <a href="#" className="hover:text-red-400"><i className="fab fa-pinterest"></i></a>
              <a href="#" className="hover:text-orange-800"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="hover:text-pink-600"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-black mt-10 pt-6 text-center">
          <div className="flex justify-center space-x-8 mb-4">
            <a href="#" className="hover:text-orange-500">TERMS & CONDITIONS</a>
            <a href="#" className="hover:text-orange-500">PRIVACY POLICY</a>
            <a href="#" className="hover:text-orange-500">SITEMAP</a>
          </div>
          <p>Copyright 2024 © </p>
          <p>Social Media</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Offer = () => {
  return (
    <div className="bg-white/20 flex flex-col items-center ">
      <h1 className="text-3xl mt-2 font-bold text-center mb-4">
        Select your plan to get started
      </h1>
      <div className="flex space-x-6">
        {/* Individual Plan */}
        <div className="border rounded-lg p-6 w-96 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
          <h2 className="text-xl font-bold mb-2">It's just for me</h2>
          <p className="mb-4">Try our Professional plan free for 30 days</p>
          <img
            alt="Person working at a desk with a laptop and a notebook"
            className="mb-4 rounded-lg"
            height="180"
            src="https://storage.googleapis.com/a1aa/image/4weJxg190YTLXKs1FcfVmnlkH8wnn2YSWwz9t7eSuarZS3XnA.jpg"
            width="320"
          />
          <ul className="mb-4">
            <li>1 user</li>
            <li>10 social accounts*</li>
          </ul>
          <div className="flex space-x-2 mb-4">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-tiktok"></i>
          </div>
          <button className="bg-blue-900 text-white py-2 px-4 rounded mb-2">
            Start your free 30-day trial
          </button>
          <p className="text-green-500">
            <a href="#">Skip trial, get 20% off</a>
          </p>
        </div>

        {/* Team Plan */}
        <div className="border rounded-lg p-6 w-96 transition-transform transform hover:scale-105 hover:shadow-lg duration-300">
          <h2 className="text-xl font-bold mb-2">I have a team</h2>
          <p className="mb-4">Try our Team plan free for 30 days</p>
          <img
            alt="Two people working together at a desk with a laptop"
            className="mb-4 rounded-lg"
            height="180"
            src="https://storage.googleapis.com/a1aa/image/8kW2W6Y29a7EJ5yECgEv6LDTOFzIcry1Ngb0EKFWiEyS6e1JA.jpg"
            width="320"
          />
          <ul className="mb-4">
            <li>3 users</li>
            <li>20 social accounts*</li>
          </ul>
          <div className="flex space-x-2 mb-4">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-pinterest"></i>
            <i className="fab fa-tiktok"></i>
          </div>
          <button className="bg-blue-900 text-white py-2 px-4 rounded mb-2">
            Start your free 30-day trial
          </button>
          <p className="text-green-500">
            <a href="#">Skip trial, get 20% off</a>
          </p>
        </div>
      </div>
      <p className="text-center mt-6 text-sm">
        *NEW! You can now add on as many social accounts as you like! Just
        select the Unlimited Social Accounts option during checkout!
      </p>
    </div>
  );
};

export default Offer;

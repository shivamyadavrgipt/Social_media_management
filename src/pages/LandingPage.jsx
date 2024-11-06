import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const stats = [
    {
      value: "200%",
      description: "Increase in following",
      image: "https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp",
      alt: "majestyk apps logo",
      name: "majestyk apps",
      icon: "fab fa-linkedin"
    },
    {
      value: "386x",
      description: "Boost in engagement rate",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqkUYrITWyI8OhPNDHoCDUjGjhg8w10_HRqg&s",
      alt: "annacmallon profile picture",
      name: "annacmallon",
      icon: "fab fa-linkedin"
    },
    {
      value: "60 hrs",
      description: "Saved per month",
      image: "https://cdn3.pixelcut.app/1/3/profile_picture_1728ecf2bd.jpg",
      alt: "velocity juice logo",
      name: "velocity juice",
      icon: "fab fa-linkedin"
    },
    {
      value: "2.5 million",
      description: "Followers",
      image: "https://www.coachcarson.com/wp-content/uploads/2018/09/Chad-Profile-pic-circle.png",
      alt: "Cern logo",
      name: "Cern",
      icon: "fab fa-twitter"
    },
    {
      value: "1.2 million",
      description: "Followers",
      image: "https://i.pinimg.com/736x/eb/c2/12/ebc212cc2eb89074a856ec501bdf193f.jpg",
      alt: "DJMag logo",
      name: "DJMag",
      icon: "fab fa-instagram"
    }
  ];

  // Repeat the stats to create a long scrolling row
  const repeatedStats = Array(10).fill(stats).flat();

  return (
    <div>
      <div className="h-screen ">
        {/* Main Section */}
        <div className="flex flex-col gap-6 md:flex-row items-center justify-between p-8 md:p-16 bg-white/20">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Grow your audience on social and beyond
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
              Socialplus helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive marketing tools for ambitious people and teams.
            </p>
            <div className="mb-4">
              <Link to="/signup">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
                  Do you want to Start
                </button>
              </Link>
            </div>
            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
              <i className="fas fa-check-circle text-blue-600 mr-2"></i> Try for free
              <i className="fas fa-check-circle text-blue-600 mx-2"></i> No credit card required
              <i className="fas fa-check-circle text-blue-600 mx-2"></i> Cancel anytime
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 relative">
            <img
              src="https://buffer.com/static/homepage/webp/hero-2.webp"
              alt="Dashboard with social media icons and analytics"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Infinite Automatic Scrollable Statistics Section */}
        <div className="relative w-full overflow-hidden bg-white/20 py-8">
          {/* Scrollable div with Tailwind scroll animation */}
          <div className="flex space-x-4 animate-scroll">
            {repeatedStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/20 shadow-md rounded-lg p-6 flex flex-col items-center min-w-[250px]"
              >
                <div className="text-2xl font-bold mb-2">
                  {stat.value} <span className="text-green-500">▲</span>
                </div>
                <div className="text-slate-500 dark:text-slate-400 mb-4">{stat.description}</div>
                <div className="flex items-center">
                  <img
                    src={stat.image}
                    alt={stat.alt}
                    className="w-10 h-10 rounded-full mr-2"
                  />
                  <div className="flex items-center">
                    <i className={`${stat.icon} text-blue-600 mr-1`}></i>
                    <span className="text-gray-800">{stat.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Sections */}
        <div className="flex flex-col gap-6 md:flex-row items-center justify-between p-8 md:p-16 bg-white/20">
          <div className="md:w-1/2 mt-8 md:mt-0 relative">
            <img
              src="https://media.sproutsocial.com/uploads/2023/03/What-is-social-media-management-everything-you-need-to-know-Final-1.svg"
              alt="Dashboard with social media icons and analytics"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Grow your audience on social and beyond
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
              Socialplus helps you build an audience organically. We’re a values-driven company that provides affordable, intuitive marketing tools for ambitious people and teams.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row items-center justify-between p-8 md:p-16 bg-white/20">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              And we are here to help
            </h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
              Our customer advocates are standing by 24/7 to support you via email and social media. We also have a comprehensive, regularly updated help center for those who prefer to find help themselves.
            </p>
            <div className="flex gap-3 items-center mb-4">
              <button className="px-6 py-3 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50">
                Visit our help center
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 relative">
            <img
              src="https://buffer.com/_next/image?url=%2Fstatic%2Fhomepage%2Fwebp%2Fteam-map.webp&w=1920&q=75"
              alt="Dashboard with social media icons and analytics"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faThLarge,
  faPaperPlane,
  faChartLine,
  faComments,
  faSun,
  faMoon,
  faFileAlt,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FaNewspaper } from "react-icons/fa";
import {
  faFacebookF,
  faInstagram,
  faXTwitter, // or faTwitter if using the classic icon
  faLinkedinIn,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

// Dropdown item component
const DropdownItem = ({ icon, title, description }) => (
  <div className="flex items-start space-x-2">
    <FontAwesomeIcon icon={icon} className="text-xl" />
    <div>
      <div className="font-semibold">{title}</div>
      {description && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </div>
      )}
    </div>
  </div>
);

const Navbar = () => {
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isChannelsDropdownOpen, setIsChannelsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [searchTerm, setSearchTerm] = useState("");

  const toggleToolsDropdown = () => {
    setIsToolsDropdownOpen(!isToolsDropdownOpen);
    setIsChannelsDropdownOpen(false); // Close channels dropdown when tools dropdown opens
  };

  const toggleChannelsDropdown = () => {
    setIsChannelsDropdownOpen(!isChannelsDropdownOpen);
    setIsToolsDropdownOpen(false); // Close tools dropdown when channels dropdown opens
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <header
      className={`w-full bg-white shadow-lg z-50 flex justify-between items-center p-4 ${
        isDarkMode ? "dark:bg-gray-800" : ""
      }`}
    >
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="https://cdn-icons-gif.flaticon.com/7211/7211809.gif"
          alt="Logo"
          className="mr-2 w-10 h-10 rounded-full" // Adjust the size here
        />
        <a href="/">
          <span
            className={`text-xl font-bold ${
              isDarkMode ? "dark:text-white" : ""
            }`}
          >
            SS͜͡o͜͡c͜͡i͜͡a͜͡l͜͡p͜͡l͜͡u͜͡s͜͡
          </span>
        </a>
      </div>

      {/* Navbar Section */}
      <nav className="flex items-center space-x-6">
        <Link
          to="/dashboard"
          className={`text-lg font-medium ${
            isDarkMode ? "dark:text-white" : ""
          }`}
        >
          Dashboard
        </Link>

        {/* Tools Dropdown */}
        <div className="relative">
          <button
            className={`text-lg font-medium ${
              isDarkMode ? "dark:text-white" : ""
            }`}
            onMouseEnter={toggleToolsDropdown}
          >
            Tools <FontAwesomeIcon icon={faChevronDown} />
          </button>

          {isToolsDropdownOpen && (
            <div
              onMouseLeave={() => setIsToolsDropdownOpen(false)}
              className={`absolute left-0 mt-2 w-80 bg-white shadow-lg z-50 rounded-lg p-6 ${
                isDarkMode ? "dark:bg-gray-700" : ""
              }`}
            >
              <div className="grid grid-cols-2 gap-4">
                <DropdownItem
                  icon={faThLarge}
                  title="Create"
                  description="Build content ideas"
                />
                <Link
                  to="/posts"
                  className={`text-lg font-medium flex items-start space-x-2 ${
                    isDarkMode ? "dark:text-white" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <div>
                    <div className="font-semibold">Publish</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Plan & publish content
                    </div>
                  </div>
                </Link>

                <Link
                  to="/newsletter"
                  className={`text-lg font-medium flex items-start space-x-2 ${
                    isDarkMode ? "dark:text-white" : ""
                  }`}
                >
                  <FaNewspaper icon={faComments} size={36} />
                  <div>
                    <div className="font-semibold">Newsletter</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Subscribe for Updates
                    </div>
                  </div>
                </Link>

                <Link
                  to="/analytics"
                  className={`text-lg font-medium flex items-start space-x-2 ${
                    isDarkMode ? "dark:text-white" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faChartLine} />
                  <div>
                    <div className="font-semibold">Analyze</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Analyze performance
                    </div>
                  </div>
                </Link>
                <Link
                  to="/contributors"
                  className={`text-lg font-medium flex items-start space-x-2 ${
                    isDarkMode ? "dark:text-white" : ""
                  }`}
                >
                  <FontAwesomeIcon icon={faComments} />
                  <div>
                    <div className="font-semibold">Engage</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Engage with your audience
                    </div>
                  </div>
                </Link>
                <DropdownItem
                  icon={faFileAlt}
                  title="Start Page"
                  description="Create a landing page"
                />
                <DropdownItem
                  icon={faLightbulb}
                  title="AI Assistant"
                  description="Generate ideas & rewrite content"
                />
              </div>
            </div>
          )}
        </div>

        {/* Channels Dropdown */}
        <div className="relative">
          <button
            className={`text-lg font-medium ${
              isDarkMode ? "dark:text-white" : ""
            }`}
            onMouseEnter={toggleChannelsDropdown}
          >
            Channels <FontAwesomeIcon icon={faChevronDown} />
          </button>

          {isChannelsDropdownOpen && (
            <div
              onMouseLeave={() => setIsChannelsDropdownOpen(false)}
              className={`absolute left-0 mt-2 z-50 w-80 bg-white shadow-lg rounded-lg p-6 ${
                isDarkMode ? "dark:bg-gray-700" : ""
              }`}
            >
              <div className="grid grid-cols-2 gap-4">
                <DropdownItem icon={faFacebookF} title="Facebook" />
                <DropdownItem icon={faInstagram} title="Instagram" />
                <DropdownItem icon={faXTwitter} title="Twitter" />
                <DropdownItem icon={faLinkedinIn} title="LinkedIn" />
                <DropdownItem icon={faYoutube} title="YouTube" />
                <DropdownItem icon={faTiktok} title="TikTok" />
              </div>
            </div>
          )}
        </div>

        {/* Other Links */}
        <Link
          to="/settings"
          className={`text-lg font-medium ${
            isDarkMode ? "dark:text-white" : ""
          }`}
        >
          Settings
        </Link>

        {/* Search */}
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-full outline-none p-2 text-gray-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-600 h-10 w-10 text-white rounded-full ml-2">
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>

        {/* Get Started Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
          Get started now
        </button>

        {/* Theme Toggle */}
        <button
          className="h-10 w-10 outline-none border-none rounded-full bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white ml-4"
          onClick={toggleTheme}
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

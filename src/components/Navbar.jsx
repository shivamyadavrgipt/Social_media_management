import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faPaperPlane,
  faChartLine,
  faComments,
  faSun,
  faMoon,
  faFileAlt,
  faLightbulb,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faXTwitter, // or faTwitter if using the classic icon
  faLinkedinIn,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Height, Search } from "@mui/icons-material";

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

const NavMenu = ({ isDarkMode, showSearchBar }) => {
  const [expandNav, setExpandNav] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const [isChannelsDropdownOpen, setIsChannelsDropdownOpen] = useState(false);
  const toggleToolsDropdown = () => {
    setIsToolsDropdownOpen(!isToolsDropdownOpen);
    setIsChannelsDropdownOpen(false); // Close channels dropdown when tools dropdown opens
  };

  const toggleChannelsDropdown = () => {
    setIsChannelsDropdownOpen(!isChannelsDropdownOpen);
    setIsToolsDropdownOpen(false); // Close tools dropdown when channels dropdown opens
  };

  // We Only Re-rotate icons back to original, when cursor leaves both button and dropdown
  useEffect(() => {
    if(isToolsDropdownOpen) {
      document.getElementById('toolsIcon').classList.add('rotate-[180deg]')
    }
    else {
      document.getElementById('toolsIcon').classList.remove('rotate-[180deg]')
    }

    if(isChannelsDropdownOpen) {
      document.getElementById('channelIcon').classList.add('rotate-[180deg]')
    }
    else {
      document.getElementById('channelIcon').classList.remove('rotate-[180deg]')
    }
  }, [isToolsDropdownOpen, isChannelsDropdownOpen])

  return (
    <>
      <button
        className={`${
          showSearchBar && "hidden sm:flex"
        } flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg xl:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-100 dark:focus:ring-gray-600`}
        onClick={() => setExpandNav(!expandNav)}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <nav
        className={`${
          expandNav
            ? "absolute mr-3 w-2/3 md:w-2/4 top-[4.6rem] xl:top-0 flex flex-col xl:flex-row rounded-lg "
            : "hidden"
        } xl:relative  xl:flex justify-between gap-4 items-center space-x-6 shadow-lg xl:shadow-sm py-4  ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white   text-black"
        } `}
      >
        <Link to="/dashboard" className="text-lg font-medium hover:text-blue-400 transition-colors duration-250">
          Dashboard
        </Link>

        {/* Tools Dropdown */}
        <div>
          <button
            className="focus:smooth-auto text-lg font-medium group transition-transform hover:text-blue-400 transition-colors duration-250"
            onMouseEnter={toggleToolsDropdown}
          >
            Tools{" "}
            <FontAwesomeIcon
              icon={faChevronDown}
              className="transition-transform duration-500 group-hover:rotate-[180deg]"
              size="2xs"
              id="toolsIcon"
            />
          </button>

          {isToolsDropdownOpen && (
            <div
              onMouseLeave={() => setIsToolsDropdownOpen(false)}
              className={`focus:smooth-auto absolute right-0 xl:left-0 mt-2 z-50 w-80  shadow-lg rounded-lg p-6 ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white   text-black"
              } `}
            >
              <div className="grid grid-cols-2 gap-4">
                <DropdownItem
                  icon={faThLarge}
                  title="Create"
                  description="Build content ideas"
                />
                <Link
                  to="/posts"
                  className="text-lg font-medium flex items-start space-x-2 "
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
                  to="/analytics"
                  className="text-lg font-medium flex items-start space-x-2"
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
                  className="text-lg font-medium flex items-start space-x-2"
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
            className="focus:smooth-auto text-lg font-medium 
             group transition-transform hover:text-blue-400 transition-colors duration-250"
            onMouseEnter={toggleChannelsDropdown}
          >
            Channels
            <FontAwesomeIcon
              icon={faChevronDown}
              className="transition-transform duration-500 group-hover:rotate-[180deg] ml-2"
              size="2xs"
              id="channelIcon"
            />
          </button>

          {isChannelsDropdownOpen && (
            <div
              onMouseLeave={() => setIsChannelsDropdownOpen(false)}
              className={`focus:smooth-auto absolute right-0 xl:left-0 mt-2 z-50 w-80  shadow-lg rounded-lg p-6  ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white   text-black"
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
        <Link to="/settings" className="text-lg font-medium hover:text-blue-400 transition-colors duration-250">
          Settings
        </Link>
        {/* Get Started Button */}
        <Link to="/signup" className="md:hidden">
          <button className=" bg-blue-600 text-white px-4 py-2 rounded-full">
            Get started now {">>"}
          </button>
        </Link>
      </nav>
    </>
  );
};

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef(null);

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
      className={` sticky top-0 w-full bg-white shadow-lg z-50 flex justify-between items-center p-4 ${
        isDarkMode ? "dark:bg-gray-800" : ""
      }`}
    >
      {/* Logo Section */}
      <div className={` flex items-center`}>
        <img
          src="https://cdn-icons-gif.flaticon.com/7211/7211809.gif"
          alt="Logo"
          className="mr-2 w-10 h-10 rounded-full" // Adjust the size here
        />
        <a href="/" className={`${showSearchBar ? "hidden" : "sm:flex"}`}>
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
      <div className="flex gap-3 items-center flex-row-reverse xl:flex-row">
        <NavMenu isDarkMode={isDarkMode} showSearchBar={showSearchBar} />
        <div className="flex gap-3">
          {/* Search */}
          <div
            className={`relative ${
              showSearchBar ? "flex" : "hidden"
            }  sm:flex items-center`}
          >
            <input
              type="text"
              placeholder="Search..."
              className={`${
                showSearchBar && "w-[70vw] sm:w-auto"
              } border-2 border-gray-400 rounded-full outline-none p-2 text-gray-600`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              ref={inputRef}
              onBlur={() => {
                setShowSearchBar(false);
              }}
            />
            <button className="bg-blue-600 h-10 w-10 text-white rounded-full ml-2">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
          <div
            className={`${
              showSearchBar ? "hidden" : " flex"
            }  sm:hidden items-center`}
            onClick={() => {
              setShowSearchBar(true);
              setTimeout(() => {
                inputRef.current.focus();
              }, 100);
            }}
          >
            <Search size={30} />
          </div>
          {/* Get Started Button */}
          <Link to="/signup" className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
              Get started now
            </button>
          </Link>

          {/* Theme Toggle */}
          <button
            className={`${
              showSearchBar && "hidden sm:block"
            } h-10 w-10 outline-none border-none rounded-full bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white ml-4 `}
            onClick={toggleTheme}
          >
            <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

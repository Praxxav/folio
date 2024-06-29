import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const navItems = [
  { id: 0, name: "home" },
  { id: 1, name: "skills" },
  { id: 2, name: "works" },
  { id: 3, name: "resume" },
  { id: 4, name: "contact" },
];

const NavBar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleNav = (name) => {
    setIsOpen(!isOpen);
    setActiveIndex(name === activeIndex ? null : name);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full fixed top-0 py-4 z-30 transition-all duration-300 ${
        scrollPosition > 0 ? `bg-white shadow-md` : "bg-transparent "
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between">
        <div className="logo">
          <Link to="/" className="text-3xl font-bold ml-6">
            PRANAV KULKARNI
          </Link>
        </div>
        <div className="nav-items flex items-center">
          <button
            onClick={toggleNav}
            className="cursor-pointer text-2xl md:hidden"
          >
            {isOpen ? <RxCross2 size={25} /> : <HiMenu size={50} />}
          </button>
          <ul
            className={`flex items-center space-x-8 md:flex md:space-x-11 ${
              isOpen ? "flex-col" : "hidden"
            } md:flex md:flex-row md:space-x-11 absolute md:relative top-16 left-0 right-3 md:top-0 bg-white md:bg-transparent w-full md:w-auto`}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  onClick={() => toggleNav(item.name)}
                  href={`#${item.name}`}
                  className={`uppercase cursor-pointer text-black hover:text-yellow-600 font-bold ${
                    item.name === activeIndex ? "text-yellow-600" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

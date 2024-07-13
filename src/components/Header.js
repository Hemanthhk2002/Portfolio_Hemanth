import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      id="Header"
      className="flex justify-between px-4 py-4 bg-black items-center"
    >
      <h1 className="font-bold text-lg text-white">Portfolio.</h1>
      <nav className="hidden md:flex gap-4 px-10">
        <a href="/" className="text-white">
          Home
        </a>
        <a href="#Resume" className="text-white">
          About
        </a>
        <a href="#Skills" className="text-white">
          Skills
        </a>
        <a href="#Projects" className="text-white">
          Projects
        </a>
        <a href="#Contact" className="text-white">
          Contact
        </a>
      </nav>
      <div className="md:hidden relative">
        <Bars3Icon
          className="h-6 w-6 text-white cursor-pointer"
          onClick={toggleMenu}
        />
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg z-50">
            <XMarkIcon
              className="h-6 w-6 text-white cursor-pointer ml-auto m-2"
              onClick={toggleMenu}
            />
            <nav className="flex flex-col items-start p-2">
              <a
                href="/"
                className="text-white text-sm my-2"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#Resume"
                className="text-white text-sm my-2"
                onClick={toggleMenu}
              >
                About
              </a>
              <a
                href="#Skills"
                className="text-white text-sm my-2"
                onClick={toggleMenu}
              >
                Skills
              </a>
              <a
                href="#Projects"
                className="text-white text-sm my-2"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#Contact"
                className="text-white text-sm my-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

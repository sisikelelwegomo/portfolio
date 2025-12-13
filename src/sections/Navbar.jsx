import { useState } from 'react';
import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {}, activeLink }) => (
  <ul className="flex gap-3 items-center justify-center">
    {navLinks.map((item) => (
      <li key={item.id}>
        <a
          href={item.href}
          onClick={onClick}
          className={`px-4 py-2 rounded-full transition-all duration-300 text-lg font-medium ${
            activeLink === item.href
              ? 'text-white'
              : 'text-gray-500 hover:bg-black-500 hover:text-white rounded-full' // Inactive links: hover styles
          }`}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('/');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-10">
      <div className="bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-full shadow-lg py-4 px-8 sm:px-12">
        <nav>
          <NavItems
            activeLink={activeLink}
            onClick={(e) => {
             
              setActiveLink(e.target.getAttribute('href')); // Update active link
            }}
          />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

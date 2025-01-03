import React, { useState } from 'react';
import img from '../assets/images/logo.png'
import Demo from './Navbar/demodrop';
import Collection from './Navbar/Collectiondropdown';
import Shop from './Navbar/Shopdrop';
import Blogs from './Navbar/blogdropdown';
import Pages from './Navbar/pages';
import User from './Navbar/customericon';
import ChangeCountry from './Navbar/country';
import Search from './Navbar/Search';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div class=" bg-white lg:bg-transparent lg:absolute lg:inset-0">
      <div class=" lg:hover:bg-white">
        <div class="lg:p-[30px] p-[15px] md:mx-6 justify-between relative bg-white lg:bg-transparent items-center flex">
          <div class="lg:hidden py-[8px]" onClick={toggleMenu}>
            {/* External icon for hamburger and close */}
            {menuOpen ? (
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png"
                alt="Close Menu"
                class='w-[21px] h-[17x] font-myCustomFont'
              />
            ) : (
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png"
                alt="Open Menu"
                class='w-[21px] h-[17px] font-myCustomFont'
              />

            )}
          </div>
          <div class="flex mx-3 flex-grow lg:flex-grow-0">
            <a href="/"><img src={img}
              alt='logo'
              class="w-[100px] h-[21.6px] lg:w-[120px] lg:h-7 mix-blend-multiply" />
            </a>
          </div>
          <div class={`flex-col lg:flex-row lg:flex gap-6 ${menuOpen ? 'flex' : 'hidden'} lg:static absolute top-14  w-1/3 left-0 lg:w-auto md:w-conatin lg:bg-transparent`}>
            <ul class="flex flex-col lg:flex-row lg:items-center lg:gap-2 lg:space-x-2 w-full lg:w-auto  text-left bg-white lg:bg-transparent">
              <li class="flex p-[16px] lg:justify-between font-myCustomFont text-[14px] text-[#646565] lg:text-black lg:py-0 "><Demo /></li>
              <li class="flex p-[16px] lg:justify-between font-myCustomFont text-[14px] text-[#646565] lg:text-black lg:py-0 "><Collection /></li>
              <li class="flex p-[16px] lg:justify-between font-myCustomFont text-[14px] text-[#646565] lg:text-black lg:py-0 "><Shop /></li>
              <li class="flex p-[16px] lg:justify-between font-myCustomFont text-[14px] text-[#646565] lg:text-black lg:py-0"><Blogs /></li>
              <li class="flex p-[16px] lg:justify-between font-myCustomFont text-[14px] text-[#646565] lg:text-black lg:py-0"><Pages /></li>
            </ul>
          </div>
          <div class="grid grid-cols-4 gap-3 md:gap-4">
           <Search/>
            <User />
            <ChangeCountry/>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#000" d="M19 20c0 1.11-.89 2-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2s-.89-2-2-2m.2-3.37l-.03.12c0 .14.11.25.25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1V2h3.27l.94 2H20c.55 0 1 .45 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1zM8.5 11H10V9H7.56zM11 9v2h3V9zm3-1V6h-3v2zm3.11 1H15v2h1zm1.67-3H15v2h2.67zM6.14 6l.94 2H10V6z" />
              </svg>
              <span className="absolute top-3 lg:top-6 bg-black text-white rounded-full font-myCustomFont text-[12px] px-1">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
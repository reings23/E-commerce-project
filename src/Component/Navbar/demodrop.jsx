import React, { useState } from "react";

const Demo = () => {
  // State to track the currently hovered menu for dropdown visibility
  const [dropdown, setDropdown] = useState(null);

  // Function to handle when mouse hovers over a menu
  const onMouseHover = (menu) => {
    setDropdown(menu);
  };

  // Function to handle when mouse leaves the menu
  const onMouseLeave = () => {
    setDropdown(null);
  };

  return (
    <div className="mx-auto flex items-center justify-between">
      {/* Main navigation menu */}
      <ul className="flex">
        <li
          className="relative"
          // Trigger dropdown visibility when hovering over the DEMO menu
          onMouseOver={() => onMouseHover("Demo")}
          onMouseLeave={onMouseLeave}
        >
          {/* Link for the DEMO menu */}
          <a
            href="#demo"
            className="py-2 px-[2px] hover:underline font-myCustomFont text-left" // Styling for the link
            aria-haspopup="true"
            aria-expanded={dropdown === "Demo"}
          >
            DEMO
          </a>

          {/* Conditionally render the dropdown menu when hovered */}
          {dropdown === "Demo" && (
            <div className="absolute -left-40 flex mt-2 gap-10 bg-white p-5 z-10">
              {/* Section for Furniture & Craft category */}
              <div className="w-56 h-44">
                <p className="font-myCustomFont text-sm font-semibold border-b-2 border-black mb-4">
                  Furniture & Craft
                </p>
                <ul className="space-y-2">
                  <li className="font-myCustomFont text-[12px] hover:text-gray-700 transition-colors">
                    <a href="#item">Handy Craft</a>
                  </li>
                  <li className="font-myCustomFont text-[12px] hover:text-gray-700 transition-colors">
                    <a href="#item">Handy Decor</a>
                  </li>
                  <li className="font-myCustomFont text-[12px] hover:text-gray-700 transition-colors">
                    <a href="#item">Handy Furniture</a>
                  </li>
                  <li className="font-myCustomFont text-[12px] hover:text-gray-700 transition-colors">
                    <a href="#item">Pets Shop</a>
                  </li>
                </ul>
              </div>

              {/* Section for Clothing & Fashion category */}
              <div className="w-56 h-44">
                <p className="font-myCustomFont text-sm font-semibold border-b-2 border-black mb-4">
                  Clothing & Fashion
                </p>
                <ul className="space-y-2">
                  <li className="font-myCustomFont text-[12px] hover:text-gray-700 transition-colors">
                    <a href="#item">Handy Clothes</a>
                  </li>
                  <li className="font-myCustomFont text-[12px] hover:text-gray-700 transition-colors">
                    <a href="#item">Handy Fashion</a>
                  </li>
                  <li className="font-myCustomFont text-[12px] hover:text-gray-700 transition-colors">
                    <a href="#item">Handy Boots</a>
                  </li>
                  <li className="font-myCustomFont text-[12px] hover:text-gray-700 transition-colors">
                    <a href="#item">Handy Bags</a>
                  </li>
                </ul>
              </div>

              {/* Section for Jewelry & Accessories category */}
              <div className="w-56 h-44">
                <p className="font-myCustomFont text-sm font-semibold border-b-2 border-black mb-4">
                  Jewelry & Accessories
                </p>
                <ul className="space-y-2">
                  <li className="font-myCustomFont text-[12px] hover:text-gray-700 transition-colors">
                    <a href="#item">Home Jewelry</a>
                  </li>
                  <li className="font-myCustomFont text-[12px] hover:text-gray-700 transition-colors">
                    <a href="#item">Handy Watch</a>
                  </li>
                  <li className="font-myCustomFont text-[12px] hover:text-gray-700 transition-colors">
                    <a href="#item">Sneaker Home</a>
                  </li>
                  <li className="font-myCustomFont text-[12px] hover:text-gray-700 transition-colors">
                    <a href="#item">Phone Case</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Demo;

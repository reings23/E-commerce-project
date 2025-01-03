import React, { useState } from "react";

const Blogs = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleMouseOver = () => {
    setDropdown(true);
  };

  const handleMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div>
      <div className="mx-auto flex items-center justify-between">
        {/* Main navigation menu */}
        <ul className="flex">
          <li
            className="relative"
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            {/* Link for the BLOG menu */}
            <a
              href="#blog"
              className="py-2 px-2 font-myCustomFont hover:underline"
            >
              BLOG
            </a>
            {dropdown && (
              <div className="absolute mt-2 left-0 bg-white p-5 z-10 shadow-md rounded">
                <ul className="space-y-2 w-48">
                  <li className="font-myCustomFont text-[12px] pb-1 border-b">
                    <a href="blog1" className="hover:text-blue-600">
                      Blog Default
                    </a>
                  </li>
                  <li className="font-myCustomFont text-[12px] pb-1 border-b">
                    <a href="blog2" className="hover:text-blue-600">
                      Blog Detail
                    </a>
                  </li>
                  <li className="font-myCustomFont text-[12px] pb-1 border-b">
                    <a href="blog3" className="hover:text-blue-600">
                      Blog Sidebar
                    </a>
                  </li>
                  <li className="font-myCustomFont text-[12px] pb-1 border-b">
                    <a href="blog4" className="hover:text-blue-600">
                      Blog List
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;

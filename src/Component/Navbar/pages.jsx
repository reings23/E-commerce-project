import React, { useState } from "react";

const Pages = () => {
    const [dropdown, setDropdown] = useState(false);

    const onMouseHover = (menu) => {
        setDropdown(menu);
    };

    const onMouseLeave = () => {
        setDropdown(null);
    };
    return(
        <div>
            <div className="mx-auto flex items-center justify-between">
            {/* Main navigation menu */}
            <ul className="flex">
                <li
                    className="relative"
                    // Trigger dropdown visibility when hovering over the DEMO menu
                    onMouseOver={() => onMouseHover("Page")}
                    onMouseLeave={onMouseLeave}
                >
                    {/* Link for the Collection menu */}
                    <a
                        href="#pages"
                        className="py-2 px-[2px] hover:underline font-myCustomFont" // Styling for the link
                    >
                        PAGES
                    </a>
                    {dropdown === "Page" && (
                       <div className="absolute flex mt-2 justify-between gap-10 left-0  bg-white p-5 z-10">
                       
                            <ul class="space-y-2 w-48">
                                <li class="font-myCustomFont text-[12px] pb-1 border-b-2 ">
                                    <a href="#contact_us">Contact Us </a>
                                </li> 
                                <li class="font-myCustomFont text-[12px] pb-1 border-b-2">
                                    <a href="#about_us">About Us </a>
                                </li>
                                <li class="font-myCustomFont text-[12px] pb-1 border-b-2 ">
                                    <a href="#faq">FAQ </a>
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
export default Pages;

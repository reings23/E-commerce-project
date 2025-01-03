import React, { useState } from "react";

const Shop = () => {
    const [dropdown, setDropdown] = useState(false);
    const onMouseHover = (menu) => {
        setDropdown(menu);
    };
    const onMouseLeave = () => {
        setDropdown(null);
    };

    const menuData = [
        // Menu data as provided
        {
            title: "Product Templates",
            items: [
                "Product Layout Square",
                "Product Layout Slider",
                "Product Layout Gallery",
                "Product Layout Simple",
                "Product Layout Classic"
            ],
        },
        {
            title: "Product Sidebar",
            items: [
                "Product Sidebar Left",
                "Product Sidebar Right",
                "Product None Sidebar"
            ],
        },
        {
            title: "Product Zoom",
            items: [
                "Zoom on hover",
                "Zoom Popup",
                "Disable Zoom"
            ],
        },
        {
            title: "Product Image Gallery",
            items: [
                "Product Left Gallery",
                "Product Right Gallery",
                "Product Thumbnail Left",
                "Product Thumbnail Bottom",
                "Product Thumbnail Right"
            ],
        },
    ];

    return (
        <div className="mx-auto flex items-center justify-between">
            {/* Main navigation menu */}
            <ul className="flex">
                <li
                    className="relative"
                    onMouseOver={() => onMouseHover("Shop")}
                    onMouseLeave={onMouseLeave}
                >
                    <a
                        href="#shop"
                        className="py-2 px-[2px] text-left hover:underline font-myCustomFont"
                        aria-haspopup="true"
                        aria-expanded={dropdown === "Shop"}
                    >
                        SHOP
                    </a>
                    {dropdown === "Shop" && (
                        <div className="absolute flex -left-60 gap-5 mt-2 bg-white p-5 z-10">
                            {menuData.map((menu, index) => (
                                <div key={index} className="space-y-4 w-40">
                                    <p className="font-myCustomFont text-sm font-semibold border-b-2 border-black mb-4">
                                        {menu.title}
                                    </p>
                                    <ul className="space-y-2">
                                        {menu.items.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="font-myCustomFont text-[12px] hover:text-gray-700 transition-colors"
                                            >
                                                <a href="#item">{item}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Shop;

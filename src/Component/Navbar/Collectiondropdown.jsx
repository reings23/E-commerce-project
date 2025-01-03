import React, { useState } from "react";

const Collection = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const showDropdown = () => {
        setIsDropdownVisible(true);
    };

    const hideDropdown = () => {
        setIsDropdownVisible(false);
    };

    const menuData = [
        {
            title: "Collection Templates",
            items: ["Classic", "Order Form", "Order Form V2", "Infinite Shop"],
        },
        {
            title: "Sidebar Layout",
            items: [
                "Right Sidebar Layout",
                "Left Sidebar Layout",
                "Full Width Layout",
            ],
        },
        {
            title: "Sidebar Styles",
            items: ["Style 1", "Style 2", "Style 3"],
        },
        {
            title: "Collection Filtering",
            items: ["Dropdown", "Accordion", "Select Box", "Drawer"],
        },
    ];

    return (
        <div className="mx-auto flex items-center justify-between">
            {/* Main navigation menu */}
            <ul className="flex">
                <li
                    className="relative"
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                    onFocus={showDropdown}
                    onBlur={hideDropdown}
                >
                    {/* Link for the Collection menu */}
                    <a
                        href="#collection"
                        className="py-2 px-4  hover:underline font-myCustomFont"
                        aria-haspopup="true"
                        aria-expanded={isDropdownVisible}
                    >
                        COLLECTION
                    </a>
                    {/* Dropdown menu */}
                    {isDropdownVisible && (
                        <div
                            className="absolute -left-40 flex mt-2 justify-between gap-10 bg-white p-5 z-10 shadow-lg border"
                            role="menu"
                        >
                            {menuData.map((menu, index) => (
                                <div
                                    key={index}
                                    className="space-y-4 w-40"
                                >
                                    <p className="font-myCustomFont text-sm font-semibold border-b-2 border-black mb-4">
                                        {menu.title}
                                    </p>
                                    <ul className="space-y-1">
                                        {menu.items.map((item, idx) => (
                                            <li
                                                key={idx}
                                                className="font-myCustomFont text-[12px] hover:text-gray-700 transition-colors"
                                                role="menuitem"
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

export default Collection;

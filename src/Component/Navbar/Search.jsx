import React, { useState } from "react";

const Search = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center">
            <ul className="flex">
                <li className="relative">
                    <button onClick={() => setIsOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path
                                fill="#000"
                                d="M4.5 11.5a7 7 0 1 1 14 0a7 7 0 0 1-14 0m7-8.5a8.5 8.5 0 1 0 5.457 15.017l6.763 6.763a.75.75 0 1 0 1.06-1.06l-6.763-6.763A8.5 8.5 0 0 0 11.5 3"
                            />
                        </svg>
                    </button>

                    {isOpen && (
                        <>
                            {/* Overlay */}
                            <div
                                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                                onClick={() => setIsOpen(false)}
                            ></div>

                            {/* Sidebar */}
                            <div
                                className={`fixed right-0 bottom-0 flex flex-col  top-0 h-full  w-full md:w-[500px] bg-[#f2f3f3] shadow-lg z-50 transform ${isOpen ? "!translate-x-0" : "translate-x-full"
                                    } transition-transform duration-[350ms] ease-in-out`}
                            >
                                {/* Close Button */}
                                <button
                                    className="absolute top-4 opacity-70 items-center justify-center cursor-pointer right-1  rounded-xl bg-black"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            fill="#fff"
                                            d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
                                        />
                                    </svg>
                                </button>

                                {/* Search Bar */}

                                <div className="py-12 px-4">
                                    <h4 className="text-lg font-normal font-myCustomFont mb-5">What are you looking for?</h4>
                                    <div className="flex w-full h-9 mb-5 bg-white">
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="w-full p-[0.75rem] flex-1 text-[#888888] border-[1px] border-solid py-[10px] px-4 "
                                        />
                                        <button className="px-1 border-solid border-[1px] ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                                <path
                                                    fill="#000"
                                                    d="M4.5 11.5a7 7 0 1 1 14 0a7 7 0 0 1-14 0m7-8.5a8.5 8.5 0 1 0 5.457 15.017l6.763 6.763a.75.75 0 1 0 1.06-1.06l-6.763-6.763A8.5 8.5 0 0 0 11.5 3"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                {/* Quick Links */}
                                <div>
                                    <h3 className="text-[16px] font-normal font-myCustomFont text-[#646465] leading-[1.5] mb-[15px]">Quick Links</h3>
                                    <ul className="space-y-2">
                                        <li>
                                            <a href="#about" className="font-myCustomFont text-sm hover:text-[#888888]">
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#story" className="font-myCustomFont text-sm hover:text-[#888888]">
                                                Our Story
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#collection" className="font-myCustomFont text-sm  hover:text-[#888888]">
                                                The Collection
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#careers" className="font-myCustomFont text-sm  hover:text-[#888888]">
                                                Careers
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                            </>
                    )}
            </li>
        </ul>
        </div >
    );
};

export default Search;

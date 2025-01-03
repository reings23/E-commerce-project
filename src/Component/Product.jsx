import React, { useEffect, useState } from "react";
import Navbar from "./Navbar.jsx"
import Footer from "./footer.jsx"

function Product() {
    const [items, setItems] = useState([]);
    const [Loading, setLoading] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://dummyjson.com/products?limit=12');
                const data = await response.json();

                setTimeout(() => {
                    setItems(data.products);
                    setLoading(false);
                }, 2000)
            }
            catch (error) {
                console.error("Error fetching product data:", error);
                setLoading(false);
            }
        };
        fetchItems();
    }, []);

    return (
        <>
            <Navbar />
            <div className="mt-4 lg:mt-20 md:mx-8 px-[15px]">
                <div className="py-[15px] border-[#e1e1e1] border-b gap-2 flex items-center">
                    <div className="flex-1 leading-tight">
                        <h3 className="font-myCustomFont text-[20px] font-semibold text-[#646565]">PRODUCTS</h3>
                    </div>
                    <ul class="hidden text-[16px] justify-end md:flex flex-wrap items-center py-3">
                        <li>
                            <a href="/" className="text-black">
                                <span className="font-myCustomFont">HOME</span>
                            </a>
                        </li>
                        <li className="flex items-center mx-[10px] ms-[10px]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <rect width="24" height="24" fill="none" />
                                <path fill="#000" d="m13.292 12l-4.6-4.6l.708-.708L14.708 12L9.4 17.308l-.708-.708z" />
                            </svg>
                        </li>
                        <li>
                            <a href="#collection" className="text-[19px] text-[#646565] font-semibold">
                                <span className="font-myCustomFont">PRODUCTS</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="hidden lg:block px-[15px] mt-[30px]">
                    <div className="grid grid-cols-12 lg:gap-7 ">
                        <div className="col-span-12 lg:col-span-9">
                            <div className="grid mb-[13px] grid-cols-3 lg:grid-cols-4"></div>
                            <div className="flex justify-between flex-wrap mb-[30px]">
                                <div className="flex items-center">
                                {/* grid view */}
                                    <button className="w-8 h-8 cursor-pointer flex justify-center items-center me-3 border-solid border border-[#e1e1e1]" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><path fill="#646565" d="M8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4-10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4" /></svg>
                                    </button>
                                    {/* List View */}
                                    <button className="w-8 h-8 cursor-pointer flex justify-center items-center me-3 border-solid border border-[#e1e1e1]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 56 56">
                                            <rect width="56" height="56" fill="none" />
                                            <path fill="#646565" fill-rule="evenodd" d="M10 36a3 3 0 1 1 0 6a3 3 0 0 1 0-6m35.998 1c1.106 0 2.002.888 2.002 2c0 1.105-.89 2-2.002 2H18.002A1.996 1.996 0 0 1 16 39c0-1.105.89-2 2.002-2zM10 26a3 3 0 1 1 0 6a3 3 0 0 1 0-6m35.998 1c1.106 0 2.002.888 2.002 2c0 1.105-.89 2-2.002 2H18.002A1.996 1.996 0 0 1 16 29c0-1.105.89-2 2.002-2zM10 16a3 3 0 1 1 0 6a3 3 0 0 1 0-6m35.998 1c1.106 0 2.002.888 2.002 2c0 1.105-.89 2-2.002 2H18.002A1.996 1.996 0 0 1 16 19c0-1.105.89-2 2.002-2z" />
                                        </svg>
                                    </button>
                                </div>
                                <form className="h-[34px]">
                                    <div className="flex items-center ps-[10px] border border-solid">
                                        <label className="me-[10px] text-[12px] font-myCustomFont text-[#646565]">Sort by</label>
                                        <div className="relative inline-block">
                                            <select className=" font-myCustomFont font-medium box-border text-[#646565] px-[15px] pe-[25px] appearance-none">
                                                <option className="text-black font-myCustomFont">Featured</option>
                                                <option className="text-black font-myCustomFont">Best-Selling</option>
                                                <option className="text-black font-myCustomFont">Alphabetically, A-Z</option>
                                                <option className="text-black font-myCustomFont">Alphabetically, Z-A</option>
                                                <option className="text-black font-myCustomFont">Price, Low to High</option>
                                                <option className="text-black font-myCustomFont">Price, High to Low</option>
                                            </select>
                                            <svg className="pointer-events-none absolute left-32 top-0" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32">
                                                <path d="M16.016 20.463l-4.26-7.463h8.52l-4.26 7.463z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        {Loading
                            ? Array.from({ length: 12 }).map((_, index) => <ShimmerCard key={index} />) :
                            items.map((item) => (
                                <Card key={item.id} item={item} />
                            ))}
                    </div>
                </div>
                <div className="flex lg:hidden bg-[#797777] py-[5px] px-[15px] border-[#e1e1e1] border-b border-t justify-between items-center left-0 bottom-0 right-0 z-50 fixed">
                    <div className="flex flex-wrap items-center">
                        <div className="my-[5px] me-[15px]">
                            <button className="flex items-center font-normal font-myCustomFont text-white cursor-pointer bg-transparent">
                                <svg className="w-[18px] h-[18px] me-[10px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <rect width="24" height="24" fill="none" />
                                    <path fill="#fff" d="M5.05 3C3.291 3 2.352 5.024 3.51 6.317l5.422 6.059v4.874c0 .472.227.917.613 1.2l3.069 2.25c1.01.742 2.454.036 2.454-1.2v-7.124l5.422-6.059C21.647 5.024 20.708 3 18.95 3z" />
                                </svg>
                                <span className="font-myCustomFont pointer-events-none">Filter</span>
                            </button>
                        </div>
                        <div className="my-[5px] border-[#e1e1e1] border-solid items-center flex">
                            <div className="relative inline-block">
                                <select className="bg-transparent text-white h-[34px] border-solid border px-[15px] pe-[25px] overflow-visible appearance-none cursor-pointer">
                                    <option className="text-black font-myCustomFont">Featured</option>
                                    <option className="text-black font-myCustomFont">Best-Selling</option>
                                    <option className="text-black font-myCustomFont">Alphabetically, A-Z</option>
                                    <option className="text-black font-myCustomFont">Alphabetically, Z-A</option>
                                    <option className="text-black font-myCustomFont">Price, Low to High</option>
                                    <option className="text-black font-myCustomFont">Price, High to Low</option>
                                </select>
                                <svg className="absolute right-1 top-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <rect width="24" height="24" fill="none" />
                                    <path fill="#fff" d="m12 15l5-5H7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="my-[5px] ms-[10px] hidden md:flex">
                        {/* GRid View */}
                        <button className="w-8 h-8 flex items-center justify-center border border-solid border-white ms-2">
                            <svg className="w-8 h-8 pointer-events-none align-middle block" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><path fill="#e1e1e1" d="M8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4-10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4" /></svg>
                        </button>
                        {/* List View */}
                        <button className="w-8 h-8 flex items-center justify-center border border-solid border-white ms-2">
                            <svg className="w-8 h-8 pointer-events-none align-middle block" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                                <rect width="24" height="24" fill="none" />
                                <path fill="#e1e1e1" stroke="#e1e1e1" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center md:hidden my-[5px]">
                        <button className="w-8 h-8 flex items-center justify-center border border-solid border-white ms-2 pointer-events-none z-[1] cursor-pointer">
                            <svg className="w-4 h-4 pointer-events-none block align-middle" focusable="false" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H7V4H0V0Z" fill="#e1e1e1"></path>
                                <path d="M0 5.5H7V9.5H0V5.5Z" fill="#e1e1e1"></path>
                                <path d="M8 5.5H15V9.5H8V5.5Z" fill="#e1e1e1"></path>
                                <path d="M8 0H15V4H8V0Z" fill="#e1e1e1"></path>
                                <path d="M0 11H7V15H0V11Z" fill="#e1e1e1"></path>
                                <path d="M8 11H15V15H8V11Z" fill="#e1e1e1"></path>
                            </svg>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center border border-solid border-white ms-2 pointer-events-none z-[1] cursor-pointer">
                            <svg className="w-8 h-8 pointer-events-none align-middle block" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                                <rect width="24" height="24" fill="none" />
                                <path fill="#e1e1e1" stroke="#e1e1e1" stroke-linecap="round" stroke-width="2" d="M9 8h10M9 12h10M9 16h10M4.99 8H5m-.02 4h.01m0 4H5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

function Card({ item }) {
    return (
        <div class="md:p-[10px] w-full md-w-1/3 h-full p-[7.5px]">
            <img src={item.thumbnail} alt={item.title} class="object-contain bg-zinc-50 w-full top-0 left-0 " />
            <a href="#item" class="font-myCustomFont text-sm text-black  hover:text-blue-500">{item.title}</a>
            <p class="font-myCustomFont text-[16px] text-[#646565]">Rs.{item.id * 100}</p>
        </div>
    );
}
function ShimmerCard() {
    return (
        <div className="md:p-[5px] p-[7.5px] animate-pulse">
            <div className="bg-gray-300 h-52 w-36 md:w-52 lg:w-[210px] xl:w-[325px] xl:h-[487px] rounded-md"></div>
            <div className="mt-3 bg-gray-300 h-4 w-3/4 rounded"></div>
            <div className="mt-2 bg-gray-300 h-4 w-1/2 rounded"></div>
        </div>
    );
}

export default Product;
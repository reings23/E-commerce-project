import React from "react";
import Featured from "./FeaturedProd"
import Footer from "./footer";
// import Highlight from "./Highlights";
// Importing images and icons for use in the component
import myimage1 from "../assets/images/img1.png"
import myimage2 from "../assets/images/img2.png"
import myimage3 from "../assets/images/img3.png"
import item from "../assets/images/item.png"
import img1 from "../assets/icons/delivery-truck.png"
import img2 from "../assets/icons/credit-card.png"
import img3 from "../assets/icons/customer-support.png"
import img4 from "../assets/icons/return-box.png"
import screen from "../assets/images/screen.png"
import blog from "../assets/images/blog.png"
import Background from "./background";

const Homepage = () => {
    return (
        <div>
            <Background/>
            {/* Main container for the homepage content */}
            <div class="container md:mt-[50px]">
                {/* Section for the top images with hover effects */}
                <div class="px-[15px] mt-5 md:mx-8">
                    <div class="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-3">
                            <div class=" relative w-full h-auto hover:bg-white">
                            <a href="#display">
                                <img src={myimage1}
                                    alt="decor"
                                    class="w-full  h-40 bg-cover bg-center lg:w-64 lg:44 xl:w-[443px] xl:h-[278px] mix-blend-multiply" /></a>
                                <div class="p-[25px] absolute inset-0 flex text-center items-center">
                                    <div class="md:text-2xl text-[21px] text-center font-bold text-[#6D8467] font-myCustomFont ">Wall Decor</div>
                                </div>
                            </div>
                        <div class="relative w-full h-auto  hover:bg-white">
                            <a href="#display">
                                <img src={myimage2}
                                alt="decor"
                                class="w-full h-40 bg-cover bg-center lg:w-64 lg:h-44 xl:w-[443px] xl:h-[278px] mix-blend-multiply" /></a>
                            <div class="p-[25px] absolute inset-0 flex items-center">
                                <div class="md:text-2xl text-[21px] text-center font-bold text-[#E09E61] font-myCustomFont ">Chair</div>
                            </div>
                        </div>
                        <div class="relative h-auto w-full  hover:bg-white">
                            <a href="#display">
                                <img src={myimage3}
                                alt="light"
                                class="w-full h-40 bg-cover bg-center lg:w-64 lg:h-44 xl:w-[443px] xl:h-[278px] mix-blend-multiply " /></a>
                            <div class="p-[25px] absolute inset-0 flex  items-center">
                                <div class=" text-[21px] d:text-2xl font-bold text-[#666666] font-myCustomFont ">Lighting</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Section for feature highlights */}
                <div class="md:mt-20 md:mx-8 lg:mt-20 md:font-myCustomFont md:text-[14px]">
                    <div class="grid grid-cols-2 lg:flex lg:justify-evenly xl:justify-evenly gap-2 md:gap-6 ">
                        <div class="py-[10px] px-[15px]  flex">
                            <img src={img1}
                                alt="truck"
                                class="w-7 h-7 lg:w-12  lg:h-10 md:w-16 md:h-12 object-contain top-0 left-0" />
                            <div class="pl-[15px]">
                                <h4 class="font-myCustomFont text-[16px] md:text-[18px] font-semibold">FREE DELIVERY</h4>
                                <p class="font-myCustomFont text-sm text-[#646565]">from 99$</p>
                            </div>
                        </div>
                        <div class="py-[10px] px-[15px] flex">
                            <img src={img2}
                                alt="payment"
                                class="w-7 h-7 lg:w-12  lg:h-10 md:w-16 md:h-12 object-contain top-0 left-0" />
                            <div class="pl-[15px]">
                                <h4 class="font-myCustomFont text-[16px] md:text-[18px] font-semibold">SAVE PAYMENT</h4>
                                <p class="font-myCustomFont text-sm text-[#646565]">save credit card</p>
                            </div>
                        </div>
                        <div class="py-[10px] px-[15px] flex">
                            <img src={img3}
                                alt="support"
                                class="w-7 h-7 lg:w-12 lg:h-10 md:w-16 md:h-12 object-contain  top-0 left-0" />
                            <div class="pl-[15px]">
                                <h4 class="font-myCustomFont text-[16px] md:text-[18px] font-semibold">CUSTOMER SUPPORT</h4>
                                <p class="font-myCustomFont text-sm text-[#646565]">24/7 feedback</p>
                            </div>
                        </div>
                        <div class="py-[10px] px-[15px] flex">
                            <img src={img4}
                                alt="return"
                                class="w-7 h-7  lg:w-12 lg:h-10 md:w-16 md:h-12 object-contain top-0 left-0" />
                            <div class="pl-[15px]">
                                <h4 class="font-myCustomFont text-[16px] md:text-[18px] font-semibold">FREE RETURN</h4>
                                <p class="font-myCustomFont text-sm text-[#646565]">don't like it</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Featured Products section */}
                <div class="px-[15px] md:mt-20 md:mx-8">
                    <h2 class="font-myCustomFont text-black font-semibold text-[22px] text-center">FEATURED PRODUCTS</h2>
                    {/* Navigation for different product categories */}
                    <ul class="flex flex-row items-center justify-center">
                        <li class="py-[5px] font-myCustomFont text-sm  text-black border-b-2 border-black"><a href="#lighting">Lighting</a></li>
                        <li class="py-[5px] ml-5 font-myCustomFont text-sm hover:border-b-2 hover:border-black text-black"><a href="#gift">Gift</a></li>
                        <li class="py-[5px] ml-5 font-myCustomFont text-sm hover:border-b-2 hover:border-black  text-black"><a href="#bath">Bath</a></li>
                        <li class="py-[5px] ml-5 font-myCustomFont text-sm hover:border-b-2 hover:border-black text-black"><a href="#rug">Rug</a></li>
                    </ul>
                    <div>
                        <Featured />
                    </div>
                </div>
                <div class="relative">
                    <img src={screen}
                        alt="Deal"
                        class="w-full h-full object-cover" />
                    <div class="p-6 inset-0 justify-center absolute flex">
                        <div class="items-center justify-center text-justify flex flex-col">
                            <div class="font-myCustomFont text-black font-bold lg:text-[32px] xl:text-[40px]">Daily Deal</div>
                            <div class="font-myCustomFont mt-4 text-black text-[18px]"><b>sleeve odio external</b>
                                <br />
                                <b>$209</b><span class="font-myCustomFont text-[14px] pl-[10px] line-through">$230</span></div>
                        </div>
                    </div>
                </div>
                <div class="mt-[10px] mx-8">
                    <div class="px-[15px] lg:mx-8 md:mx-6 xl:mx-2">
                        <div class="py-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                            <div class=" block">
                                <div class="font-myCustomFont text-lg">ON SALE</div>
                                {/* <Highlight /> */}
                                <div class="mt-5 border-t-[1px] border-[#646565]">
                                    <div class="flex gap-[15px] mt-2 relative">
                                        <a href="#item"><img src={item}
                                            alt="img"
                                            class="left-0 object-cover w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" /></a>
                                        <div class="flex-grow">
                                            <a href="#item" class="font-myCustomFont text-sm">Shanty2Chic Chair, Blue</a>
                                            <div class="mt-[5px] flex items-baseline gap-[6px] flex-wrap">
                                                <span class="font-myCustomFont text-[#646565] text-[16px]">Rs.7,600</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex gap-[15px] mt-2 relative">
                                        <a href="#item"><img src={item}
                                            alt="img"
                                            class="left-0 object-cover w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" /></a>
                                        <div class="flex-grow">
                                            <a href="#item" class="font-myCustomFont text-sm">Shanty2Chic Chair, Blue</a>
                                            <div class="mt-[5px] flex items-baseline gap-[6px] flex-wrap">
                                                <span class="font-myCustomFont text-[#646565] text-[16px]">Rs.7,600</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex gap-[15px] mt-2 relative">
                                        <a href="#item"><img src={item}
                                            alt="img"
                                            class="left-0 object-cover w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" /></a>
                                        <div class="flex-grow">
                                            <a href="#item" class="font-myCustomFont text-sm ">Shanty2Chic Chair, Blue</a>
                                            <div class="mt-[5px] flex items-baseline gap-[6px] flex-wrap">
                                                <span class="font-myCustomFont text-[#646565] text-[16px]">Rs.7,600</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class=" block">
                                <div class="font-myCustomFont text-lg">FEATURED PRODUCT</div>
                                <div class="mt-5 border-t-[1px] border-[#646565]">
                                    <div class="flex gap-[15px] mt-2 relative">
                                        <a href="#item"><img src={item}
                                            alt="img"
                                            class="left-0 object-cover w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" /></a>
                                        <div class="flex-grow">
                                            <a href="#item" class="font-myCustomFont text-sm">Shanty2Chic Chair, Blue</a>
                                            <div class="mt-[5px] flex items-baseline gap-[6px] flex-wrap">
                                                <span class="font-myCustomFont text-[#646565] text-[16px]">Rs.7,600</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex gap-[15px] mt-2 relative">
                                        <a href="#item"><img src={item}
                                            alt="img"
                                            class="left-0 object-cover w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" /></a>
                                        <div class="flex-grow">
                                            <a href="#item" class="font-myCustomFont text-sm">Shanty2Chic Chair, Blue</a>
                                            <div class="mt-[5px] flex items-baseline gap-[6px] flex-wrap">
                                                <span class="font-myCustomFont text-[#646565] text-[16px]">Rs.7,600</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex gap-[15px] mt-2 relative">
                                        <a href="#item"><img src={item}
                                            alt="img"
                                            class="left-0 object-cover w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" /></a>
                                        <div class="flex-grow">
                                            <a href="#item" class="font-myCustomFont text-sm ">Shanty2Chic Chair, Blue</a>
                                            <div class="mt-[5px] flex items-baseline gap-[6px] flex-wrap">
                                                <span class="font-myCustomFont text-[#646565] text-[16px]">Rs.7,600</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class=" block">
                                <div class="font-myCustomFont text-lg">TOP RATE</div>
                                <div class="mt-5 border-t-[1px] border-[#646565]">
                                    <div class="flex gap-[15px] mt-2 relative">
                                        <a href="#item"><img src={item}
                                            alt="img"
                                            class="left-0 object-cover w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" /></a>
                                        <div class="flex-grow">
                                            <a href="#item" class="font-myCustomFont text-sm">Shanty2Chic Chair, Blue</a>
                                            <div class="mt-[5px] flex items-baseline gap-[6px] flex-wrap">
                                                <span class="font-myCustomFont text-[#646565] text-[16px]">Rs.7,600</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex gap-[15px] mt-2 relative">
                                        <a href="#item"><img src={item}
                                            alt="img"
                                            class="left-0 object-cover w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" /></a>
                                        <div class="flex-grow">
                                            <a href="#item" class="font-myCustomFont text-sm">Shanty2Chic Chair, Blue</a>
                                            <div class="mt-[5px] flex items-baseline gap-[6px] flex-wrap">
                                                <span class="font-myCustomFont text-[#646565] text-[16px]">Rs.7,600</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex gap-[15px] mt-2 relative">
                                        <a href="#item"><img src={item}
                                            alt="img"
                                            class="left-0 object-cover w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" /></a>
                                        <div class="flex-grow">
                                            <a href="#item" class="font-myCustomFont text-sm ">Shanty2Chic Chair, Blue</a>
                                            <div class="mt-[5px] flex items-baseline gap-[6px] flex-wrap">
                                                <span class="font-myCustomFont text-[#646565] text-[16px]">Rs.7,600</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class=" block">
                                <div class="font-myCustomFont text-lg">POPULAR</div>
                                <div class="mt-5 border-t-[1px] border-[#646565]">
                                    <div class="flex gap-[15px] mt-2 relative">
                                        <a href="#item"><img src={item}
                                            alt="img"
                                            class="left-0 object-cover w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" /></a>
                                        <div class="flex-grow">
                                            <a href="#item" class="font-myCustomFont text-sm">Shanty2Chic Chair, Blue</a>
                                            <div class="mt-[5px] flex items-baseline gap-[6px] flex-wrap">
                                                <span class="font-myCustomFont text-[#646565] text-[16px]">Rs.7,600</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex gap-[15px] mt-2 relative">
                                        <a href="#item"><img src={item}
                                            alt="img"
                                            class="left-0 object-cover w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" /></a>
                                        <div class="flex-grow">
                                            <a href="#item" class="font-myCustomFont text-sm">Shanty2Chic Chair, Blue</a>
                                            <div class="mt-[5px] flex items-baseline gap-[6px] flex-wrap">
                                                <span class="font-myCustomFont text-[#646565] text-[16px]">Rs.7,600</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex gap-[15px] mt-2 relative">
                                        <a href="#item"><img src={item}
                                            alt="img"
                                            class="left-0 object-cover w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" /></a>
                                        <div class="flex-grow">
                                            <a href="#item" class="font-myCustomFont text-sm ">Shanty2Chic Chair, Blue</a>
                                            <div class="mt-[5px] flex items-baseline gap-[6px] flex-wrap">
                                                <span class="font-myCustomFont text-[#646565] text-[16px]">Rs.7,600</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-[15px]">
                    <div class="mb-4">
                        <div class="font-myCustomFont text-center text-2xl text-black">FROM THE BLOG</div>
                    </div>
                    <div class="grid md:grid-cols-3 ">
                        <div class="md:pr-[30px]">
                            <a href="#blog" class=""><img src={blog}
                                alt="blog"
                                class="w-72 h-[186.26px] xl:w-full xl:h-72" /></a>
                            <div class="py-[10px] px-5">
                                <a href="#blog-content" class="mb-2 font-myCustomFont text-[16px]">Write in your first blog post</a>
                                <div class="mb-[10px]">
                                    <span class="font-myCustomFont text-[12px] mr-[5px] pr-2 text-[#484747]">Arean Tech</span>
                                </div>
                            </div>
                        </div>
                        <div class="md:pr-[30px]">
                            <a href="#blog"><img src={blog}
                                alt="blog"
                                class="w-72 h-[186.26px] xl:w-full xl:h-72" /></a>
                            <div class="py-[10px] px-5">
                                <a href="#blog-content" class="mb-2 font-myCustomFont text-[16px]">Write in your first blog post</a>
                                <div class="mb-[10px]">
                                    <span class="font-myCustomFont text-[12px] mr-[5px] pr-2 text-[#484747]">Arean Tech</span>
                                </div>
                            </div>
                        </div>
                        <div class="md:pr-[30px]">
                            <a href="#blog" ><img src={blog}
                                alt="blog"
                                class="w-72 h-[186.26px] xl:w-full xl:h-72" /></a>
                            <div class="py-[10px] px-5">
                                <a href="#blog-content" class="mb-2 font-myCustomFont text-[16px]">Write in your first blog post</a>
                                <div class="mb-[10px]">
                                    <span class="font-myCustomFont text-[12px] mr-[5px] pr-2 text-[#484747]">Arean Tech</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
export default Homepage;
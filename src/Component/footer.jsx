import React from "react";
import logo from "../assets/images/logo.png"

const Footer = () => {
    return (
        <div class="pt-10 pb-[30px] md:px-2 bg-zinc-100 font-myCustomFont">
            <div class="md:mx-4 md:px-2">
                <div class="md:-mx-[15px] flex flex-wrap max-lg:gap-y-5">
                    <div class="px-4 lg:w-1/4 md:w-1/2 w-full ">
                        <div class="lg:flex pb-[10px]">
                            <img src={logo}
                                alt="logo"
                                class="w-28 h-6 object-contain mix-blend-multiply" />
                        </div>
                        <div class="mb-5">
                            <p class="font-myCustomFont text-sm text-black">Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Culpa error, eius eligendi<br /> dolorum sit incidunt dolores quia eveniet </p>
                        </div>
                        <div>
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                                    <path fill="black" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                                    /></svg>
                                <div class="font-myCustomFont text-[15px] font-extralight">225 Bills Place Brogan Chad</div>
                            </div>
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16"><path fill="black" d="M4 3a2 2 0 0 0-2 2v.201l6 3.231l6-3.23V5a2 2 0 0 0-2-2zm10 3.337L8.237 9.44a.5.5 0 0 1-.474 0L2 6.337V11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z" /></svg>
                                <div class="font-myCustomFont text-[15px] font-extralight">handy.theme@theme.com</div>
                            </div>
                            <div class="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="black" d="m7.772 2.439l1.077-.344c1.008-.322 2.086.199 2.518 1.217l.86 2.028c.375.883.167 1.922-.514 2.568L9.82 9.706q.175 1.614 1.084 3.177a8.7 8.7 0 0 0 2.271 2.595l2.276-.76c.862-.287 1.801.044 2.33.821l1.232 1.81c.616.904.505 2.15-.258 2.916l-.818.821c-.814.817-1.976 1.114-3.052.778q-3.808-1.188-7.003-7.053q-3.199-5.875-2.258-9.968c.264-1.148 1.082-2.063 2.15-2.404" /></svg>
                                <div class="font-myCustomFont text-[15px] font-extralight">(424) 138 7397</div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 lg:w-1/6 w-full md:w-1/4">
                        <h4 class="font-myCustomFont font-semibold pt-[7px] pb-[13px] text-lg leading-[25px]">About Us</h4>
                        <div>
                            <div class="font-myCustomFont py-1 text-[15px] leading-[27px] font-light ">
                                <a href="#aboutus" class="font-myCustomFont font-light  text-[15px]">About Us</a>
                            </div>
                            <div class="font-myCustomFont py-1 text-[15px] leading-[27px] font-light ">
                                <a href="#aboutus" class="font-myCustomFont font-light text-[15px]">Our Story</a>
                            </div>
                            <div class="font-myCustomFont py-1 text-[15px] leading-[27px] font-light ">
                                <a href="#aboutus" class="font-myCustomFont font-light text-[15px]">Collection</a>
                            </div>
                            <div class="font-myCustomFont py-1 text-[15px] leading-[27px] font-light ">
                                <a href="#aboutus" class="font-myCustomFont font-light text-[15px]">Careers</a>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 lg:w-1/6 w-full md:w-1/4">
                        <h4 class="font-myCustomFont font-semibold pt-[7px] pb-[13px] text-lg leading-[25px]">Information</h4>
                        <div>
                            <div class="font-myCustomFont py-1 text-[15px] leading-[27px] font-light ">
                                <a href="#aboutus" class="font-myCustomFont font-light text-[15px]">FAQ</a>
                            </div>
                            <div class="font-myCustomFont py-1 text-[15px] leading-[27px] font-light ">
                                <a href="#aboutus" class="font-myCustomFont font-light text-[15px]">About Us</a>
                            </div>
                            <div class="font-myCustomFont py-1 text-[15px] leading-[27px] font-light ">
                                <a href="#aboutus" class="font-myCustomFont font-light text-[15px]">Shipping & Returns</a>
                            </div>
                            <div class="font-myCustomFont py-1 text-[15px] leading-[27px] font-light ">
                                <a href="#aboutus" class="font-myCustomFont font-light text-[15px]">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 lg:w-1/6 w-full md:w-1/4">
                        <h4 class="font-myCustomFont font-semibold pt-[7px] pb-[13px] text-lg leading-[25px]">My Services</h4>
                        <div>
                            <div class="font-myCustomFont py-1 text-[15px] leading-[27px] font-light ">
                                <a href="#aboutus" class="font-myCustomFont font-light text-[15px]">Track My Order</a>
                            </div>
                            <div class="font-myCustomFont py-1 text-[15px] leading-[27px] font-light ">
                                <a href="#aboutus" class="font-myCustomFont font-light text-[15px]">Customer Support</a>
                            </div>
                            <div class="font-myCustomFont py-1 text-[15px] leading-[27px] font-light ">
                                <a href="#aboutus" class="font-myCustomFont font-light text-[15px]">Affiliate</a>
                            </div>
                            <div class="font-myCustomFont py-1 text-[15px] leading-[27px] font-light ">
                                <a href="#aboutus" class="font-myCustomFont font-light text-[15px]">Summer</a>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 lg:w-1/4 w-full md:w-3/4">
                        <h4 class="font-myCustomfont font-semibold pt-[7px] pb-[13px] text-lg leading-[25px]">Subscribe to Our Newsletter</h4>
                        <div class=" text-sm font-light font-myCustomFont mb-5">
                            Be the first to hear about new trending and offers and see how you’ve helped
                        </div>
                        <div>
                            <div class="flex flex-col gap-1 overflow-clip">
                                <input placeholder="Your E-mail Address" required type="email" class="bg-white py-[10px] px-[15px] h-10 flex-1 text-black"/>
                                <button type="submit" class=" gap-[5px] items-center w-fit flex text-sm px-[10px] py-[5px] text-[#ffffff] -rounded-[1px] bg-red-700 border-black">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;
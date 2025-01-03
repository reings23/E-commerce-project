import React, { useState } from "react";
import Navbar from "./Navbar";
import background1 from '../assets/images/bg.jpg'
import background2 from '../assets/images/screen2.jpg'
import background3 from '../assets/images/bg3.png'

function Background() {
    const slides = [
        {
            id: 1,
            image: background1,
            title: "NEW COLLECTION",
            type: "HOME DECORE 2",
            shop: "Shop Now",
            titleClass: "py-[10px] top-[15%] md:top-[23%] lg:top-[15%] xl:top-[29%]  absolute inset-0 text-center font-myCustomFont font-thin md:text-sm text-[21px]",
            typeClass: "py-[10px] items-center font-myCustomFont hidden absolute inset-0 md:top-[28%] lg:top-[19%] xl:top-[34%]  md:block font-bold text-xl text-[#000000] text-center",
            shopClass: "py-[10px] text-center md:top-[33%] lg:top-[23%] xl:top-[40%]  absolute inset-0",
            aClass: "py-[14px] px-[40px] text-sm border-2 text-black hidden bg-[#E1E1E1] md:inline-block items-center font-myCustomFont"
        },
        {
            id: 2,
            image: background2,
            title: "The Hottest",
            type: "COLLECTIONS",
            shop: "Shop Now",
            titleClass: "py-[50px] lg:py-[10px] italic font-light text-[#FFFFFF] top-[13%] lg:top-[45%] absolute inset-0 text-left left-[32%] lg:left-[43%] font-myCustomFont text-[25px]",
            typeClass: "py-[10px] text-left left-[43%] text-[#FFFFFF] fonthidden absolute inset-0 top-[51%] md:block font-normal text-[35px]",
            shopClass: "py-[10px] text-left left-[43%] top-[61%] absolute inset-0",
            aClass: "py-[14px] px-[40px] text-sm border-2 text-black hidden bg-[#FFFFFF] md:inline-block items-center font-myCustomFont"
        },
        {
            id: 3,
            image: background3,
            title: "Decor Home",
            type: "Premium 2019",
            shop: "Shop Now",
            titleClass: "py-[10px] top-[18%] lg:top-[30%] text-right text-[#646565] lg:right-[25%] md:right-[18%] right-[5%] leading-none absolute inset-0 font-myCustomFont font-medium text-[21px] md:text-[38px]",
            typeClass: "py-[10px] text-right right-[5%] md:right-[18%] lg:right-[25%] font-myCustomFont absolute inset-0 top-[28%] lg:top-[40%]  font-light text-[12px] md:text-[21px] text-[#646565]",
            shopClass: "py-[10px] top-[35%] lg:top-[50%] text-right right-[18%] lg:right-[25%] absolute inset-0",
            aClass: "py-[14px] px-[40px] text-sm border-2 text-black hidden bg-[#FFFFFF] md:inline-block items-center font-myCustomFont"
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    }
    const nextSlide = () => {
        setCurrentIndex((prevSlide) => (prevSlide + 1) % slides.length);
    }

    return (
        <div>
            <Navbar />
            <div class="bg-cover top-0 bg-center md:bg-contain lg:bg-contain xl:bg-cover h-full bg-no-repeat">
                <img src={`${slides[currentIndex].image}`}
                    alt="bgimage"
                    class="w-full" />
            </div>
            <div class={`${slides[currentIndex].titleClass}`}>{slides[currentIndex].title}</div>
            <div class={`${slides[currentIndex].typeClass}`}>{slides[currentIndex].type}</div>
            <div class={`${slides[currentIndex].shopClass}`}>
                <a href="/products" class={`${slides[currentIndex].aClass}`}>{slides[currentIndex].shop}</a>
            </div>
            <div hidden={currentIndex === 0} class=" absolute group-hover:block text-black left-5 top-1/4 md:top-1/3 lg:top-2/4 text-sm ">
                <svg onClick={prevSlide} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20"><path fill="white" d="m5.83 9l5.58-5.58L10 2l-8 8l8 8l1.41-1.41L5.83 11H18V9z" /></svg>
            </div>
            <div hidden={currentIndex === slides.length - 1} class=" absolute group-hover:block text-black right-5 top-1/4 md:top-1/3 lg:top-2/4 text-sm ">
                <svg onClick={nextSlide} xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 20 20"><path fill="white" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" /></svg>
            </div>
        </div>
    );
};
export default Background;
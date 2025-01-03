import React, { useState, useEffect } from "react";

function Highlight() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products?limit=4');
                const data = await response.json();
                setItems(data.products); // Corrected here
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        };
        fetchData();
    }, []);

    return (
        <div class="mt-5 border-t-[1px] border-[#646565]">
            {items.map((item) => (
                <Highlights key={item.id} item={item} />
            ))}
        </div>

    );
};
function Highlights({ item }) {
    <div class="flex gap-[15px] mt-2 relative">
        <a href="#item"><img src={item.thumbnail} alt={item.title}
            class="left-0 object-cover w-[70px] h-[70px] xl:w-[100px] xl:h-[100px]" /></a>
        <div class="flex-grow">
            <a href="#item" class="font-myCustomFont text-sm">{item.title}</a>
            <div class="mt-[5px] flex items-baseline gap-[6px] flex-wrap">
                <span class="font-myCustomFont text-[#646565] text-[16px]">Rs.{item.id * 100}</span>
            </div>
        </div>
    </div>

}
export default Highlight
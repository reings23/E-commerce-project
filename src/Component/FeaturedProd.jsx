import React, { useEffect, useState } from "react";


function Featured() {
    const [items, setItems] = useState([]);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://dummyjson.com/products?limit=12');
                const data = await response.json();

                setTimeout(() =>{
                    setItems(data.products); 
                    setLoading(false);
                },2000)
                
            } catch (error) {
                console.error("Error fetching product data:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
    
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Loading
                 ? Array.from({ length: 12 }).map((_, index) => <ShimmerCard key={index} />)
                 : items.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
    );
}
function Card({ item }) {
    return (
        <div class="md:p-[15px] p-[7.5px]">
            <img src={item.thumbnail} alt={item.title} class="object-contain xl:w-[325px] xl:h-[487px] md:h-[315px] lg:w-[210px]  bg-zinc-50 h-52 w-36  md:w-52 top-0 left-0 mix-blend-multiply" />
            <a href="#item" class="font-myCustomFont text-sm text-black  hover:text-blue-500">{item.title}</a>
            <p class="font-myCustomFont text-[16px] text-[#646565]">Rs.{item.id * 100}</p>
        </div>
    );
}
function ShimmerCard() {
    return (
        <div className="md:p-[15px] p-[7.5px] animate-pulse">
            <div className="bg-gray-300 h-52 w-36 md:w-52 lg:w-[210px] xl:w-[325px] xl:h-[487px] rounded-md"></div>
            <div className="mt-3 bg-gray-300 h-4 w-3/4 rounded"></div>
            <div className="mt-2 bg-gray-300 h-4 w-1/2 rounded"></div>
        </div>
    );
}

export default Featured;

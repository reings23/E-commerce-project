import React, { useState, useEffect } from "react";

function View() {
  const [items, setItems] = useState([]);
  const [Loading, setLoading] = useState([]);
  const [isGridView, setIsGridView] = useState(true);

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
      <div className="flex items-center" onClick={() => setIsGridView(!isGridView)}>
        {/* Grid View Icon */}
        <div
          className={`w-8 h-8 cursor-pointer flex justify-center items-center me-3 border-solid border border-[#e1e1e1] ${isGridView ? "" : ""}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none" /><path fill="#646565" d="M8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4-10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4" /></svg>
        </div>

        {/* List View Icon */}
        <div
          className={`w-8 h-8 cursor-pointer flex justify-center items-center me-3 border-solid border border-[#e1e1e1] ${!isGridView ? "" :
            ""}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 56 56">
            <rect width="56" height="56" fill="none" />
            <path fill="#646565" fill-rule="evenodd" d="M10 36a3 3 0 1 1 0 6a3 3 0 0 1 0-6m35.998 1c1.106 0 2.002.888 2.002 2c0 1.105-.89 2-2.002 2H18.002A1.996 1.996 0 0 1 16 39c0-1.105.89-2 2.002-2zM10 26a3 3 0 1 1 0 6a3 3 0 0 1 0-6m35.998 1c1.106 0 2.002.888 2.002 2c0 1.105-.89 2-2.002 2H18.002A1.996 1.996 0 0 1 16 29c0-1.105.89-2 2.002-2zM10 16a3 3 0 1 1 0 6a3 3 0 0 1 0-6m35.998 1c1.106 0 2.002.888 2.002 2c0 1.105-.89 2-2.002 2H18.002A1.996 1.996 0 0 1 16 19c0-1.105.89-2 2.002-2z" />
          </svg>
        </div>
      </div>
      <div className={`grid ${isGridView ? "grid-cols-2 md:grid-cols-3 gap-6" : "grid-cols-1 gap-4"}`}>
        {Loading
          ? Array.from({ length: 12 }).map((_, index) => <ShimmerCard key={index} />) :
          items.map((item) => (
            <Card key={item.id} item={item} />
          ))}
      </div>
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
export default View;

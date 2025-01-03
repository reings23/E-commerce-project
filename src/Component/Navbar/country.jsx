import React, { useState } from "react";

const ChangeCountry = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const showPopup = () => {
        setPopupVisible(!isPopupVisible);
    };

    const popupClose = () => {
        setPopupVisible(null);
    }

    const [selectedCurrency, setSelectedCurrency] = useState("INR");
    const [selectedLanguage, setSelectedLanguage] = useState("EN")

    const handleChange = (e) => {
        setSelectedCurrency(e.target.value)
        setSelectedLanguage(e.target.value)
    }

    return (
        <div className="flex flex-col items-center justify-center ">
            <ul className="flex">
                <li className="relative" onClick={showPopup}>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 1024 1024"><path fill="#000" d="M1025.02 512c0-272.016-213.663-495.104-482.319-511.023c-5.536-.608-11.088-1.009-16.72-1.009c-1.664 0-3.328.176-4.992.224c-2.992-.048-5.968-.224-8.992-.224C229.117-.032-1.026 229.664-1.026 512s230.144 512.032 513.023 512.032c3.024 0 6-.176 9.008-.24c1.664.064 3.328.24 4.992.24c5.632 0 11.184-.4 16.72-1.009c268.64-15.92 482.304-238.976 482.303-511.023m-95.451 164.832c-17.632-5.12-61.92-16.24-140.064-25.392c6.464-44.192 10-90.896 10-139.44c0-38.256-2.208-75.343-6.288-111.008c99.008-11.824 142.384-26.72 145.296-27.745l-11.92-33.584c22.24 53.088 34.56 111.296 34.56 172.336c0 58.193-11.28 113.761-31.583 164.833zM285.488 512.001c0-35.808 2.37-70.77 6.705-104.401c51.888 4.08 113.936 7.088 186.863 7.792v222.064c-70.992.688-131.664 3.568-182.688 7.473c-7.04-42.193-10.88-86.88-10.88-132.928M542.945 68.223c78.464 22.736 145.648 131.695 175.744 276.111c-48.368 3.856-106.624 6.673-175.744 7.33zm-63.886.783V351.63c-68.368-.688-126.88-3.473-176.063-7.232C333.7 201.79 401.428 93.646 479.059 69.006m0 632.223l.001 253.743c-72.4-22.976-136.192-118.575-169.36-247.023c47.76-3.504 104.096-6.063 169.359-6.72m63.888 254.543l-.001-254.56c65.952.623 122.064 3.28 169.217 6.928c-32.608 130.128-96 226.416-169.216 247.632m-.001-318.32l.001-222.032c73.311-.688 134.991-3.776 186.191-8a845 845 0 0 1 6.496 104.592c0 46.128-3.712 90.864-10.528 133.12c-50.416-4.08-110.8-7.008-182.16-7.68m371.858-323.52c-9.664 3.008-50.063 14.48-131.023 24.032c-18.048-95.952-50.672-177.968-93.12-237.168C788.197 143.18 867.797 219.1 914.805 313.932zM358.82 90.589c-52.208 59.952-94.832 146.161-118.096 248.113c-72.48-7.856-115.921-17.089-133.312-21.281c50.72-104.64 141.04-186.752 251.408-226.832M83.637 377.182c12.32 3.344 58.913 14.941 145.553 24.525a796 796 0 0 0-7.68 110.305c0 48.273 4.368 94.721 12.24 138.688c-74.4 8.033-120.16 17.649-140.688 22.609c-19.44-50.096-30.208-104.447-30.208-161.312c0-46.96 7.312-92.256 20.783-134.815m37.457 355.166c23.264-4.944 64.912-12.464 126.592-18.928c24.288 89.712 63.792 165.616 111.136 219.968c-101.12-36.72-185.296-108.752-237.728-201.04M690.662 923.18c38.224-53.264 68.48-125.024 87.296-208.801c63.408 7.28 103.216 15.792 123.296 20.864c-48.016 83.072-121.855 149.393-210.592 187.937" /></svg>
                    </button>
                    {isPopupVisible && (
                        <div className="max-h-[90vh] flex fixed w-[300px] left-[40%] top-[15%] -mt-[100px] justify-center items-center inset-10 z-10">
                            <div className="relative p-6 bg-white flex flex-col w-full">
                                <button onClick={popupClose} className="absolute top-0 right-0 w-8 h-8 flex justify-center items-center z-10 bg-black hover:bg-[#3b423d]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path fill="#fff" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z" />
                                    </svg>
                                </button>
                                <div className="flex justify-start text-2xl relative">
                                    <div className="pb-5 mb-3 text-3xl font-light w-full font-myCustomFont border-b-2">PREFERENCES:</div>
                                </div>
                                <div>
                                    <div className="py-3 text-xl font-myCustomFont ">Currencies:</div>
                                    <select value={selectedCurrency} onChange={handleChange} className="flex h-10 max-w-full">
                                        <option value="INR">Indian Rupee (INR)</option>
                                        <option value="USD">US Dollar (USD)</option>
                                        <option value="EUR">EURO (EUR)</option>
                                        <option value="AED">UAE Dirham (AED)</option>
                                    </select>
                                </div>
                                <div>
                                    <div className="py-3 text-xl  font-myCustomFont">Languages:</div>
                                    <select value={selectedLanguage} onChange={handleChange} className="flex h-10 max-w-full">
                                        <option value="EN">English</option>
                                        <option value="HI">Hindi</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default ChangeCountry;

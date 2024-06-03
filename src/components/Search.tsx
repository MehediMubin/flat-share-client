import { useState } from "react";
import { IoBedOutline, IoLocationOutline } from "react-icons/io5";

const Search = ({
   setSearchState,
}: {
   setSearchState: (state: any) => void;
}) => {
   const [location, setLocation] = useState("");
   const [minPrice, setMinPrice] = useState("");
   const [maxPrice, setMaxPrice] = useState("");
   const [numberOfBedrooms, setNumberOfBedrooms] = useState("");

   const handleSearch = () => {
      setSearchState({ location, minPrice, maxPrice, numberOfBedrooms });
   };

   return (
      <div className="bg-[#5087db] p-5 flex flex-col md:flex-row justify-between items-center rounded">
         <div className="bg-white rounded p-2 w-full mb-2 md:mb-0 md:mr-2 flex items-center">
            <IoLocationOutline className="mr-2" />
            <input
               className="flex-1 border-none focus:outline-none focus:ring-0"
               type="text"
               placeholder="Location"
               value={location}
               onChange={(e) => setLocation(e.target.value)}
            />
         </div>
         <div className="w-full mb-2 md:mb-0 md:mr-2 flex flex-col md:flex-row items-center">
            <div className="flex items-center w-full mb-2 md:mb-0 md:mr-2">
               <input
                  className="bg-white rounded p-2 w-full focus:outline-none focus:ring-0"
                  type="number"
                  placeholder="Min price"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
               />
            </div>
            <div className="flex items-center w-full">
               <input
                  className="bg-white rounded p-2 w-full focus:outline-none focus:ring-0"
                  type="number"
                  placeholder="Max price"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
               />
            </div>
         </div>
         <div className="bg-white rounded p-2 w-full mb-2 md:mb-0 md:mr-2 flex items-center">
            <IoBedOutline className="mr-2" />
            <input
               className="flex-1 border-none focus:outline-none focus:ring-0"
               type="number"
               placeholder="Bedrooms"
               value={numberOfBedrooms}
               onChange={(e) => setNumberOfBedrooms(e.target.value)}
            />
         </div>
         <button
            className="bg-white text-blue-500 font-bold py-2 px-4 rounded shadow-lg w-full md:w-auto"
            onClick={handleSearch}
         >
            Search
         </button>
      </div>
   );
};

export default Search;

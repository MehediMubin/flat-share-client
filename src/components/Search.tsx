import { IoBedOutline, IoLocationOutline } from "react-icons/io5";

const Search = () => {
   return (
      <div className="bg-[#777B81] p-5 flex flex-col md:flex-row justify-between items-center rounded">
         <div className="bg-white rounded p-2 w-full mb-2 md:mb-0 md:mr-2 flex items-center">
            <IoLocationOutline className="mr-2" />
            <input
               className="flex-1 border-none focus:outline-none focus:ring-0"
               type="text"
               placeholder="Location"
            />
         </div>
         <div className="w-full mb-2 md:mb-0 md:mr-2 flex flex-col md:flex-row items-center">
            <div className="flex items-center w-full mb-2 md:mb-0 md:mr-2">
               <input
                  className="bg-white rounded p-2 w-full focus:outline-none focus:ring-0"
                  type="number"
                  placeholder="Min price"
               />
            </div>
            <div className="flex items-center w-full">
               <input
                  className="bg-white rounded p-2 w-full focus:outline-none focus:ring-0"
                  type="number"
                  placeholder="Max price"
               />
            </div>
         </div>
         <div className="bg-white rounded p-2 w-full mb-2 md:mb-0 md:mr-2 flex items-center">
            <IoBedOutline className="mr-2" />
            <input
               className="flex-1 border-none focus:outline-none focus:ring-0"
               type="number"
               placeholder="Bedrooms"
            />
         </div>
         <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded shadow-lg w-full md:w-auto">
            Search
         </button>
      </div>
   );
};

export default Search;

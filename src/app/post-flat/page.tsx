"use client";
import withAuth from "@/utils/withAuth";
import Link from "next/link";
import React from "react";

const page = () => {
   return (
      <div className="h-screen-16 flex items-center justify-center bg-gray-50 py-1 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md w-full space-y-8 shadow-lg p-6 rounded-lg bg-white">
            <div>
               <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  List Your Flat
               </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
               <div className="rounded-md shadow-sm space-y-4">
                  <div>
                     <label htmlFor="location" className="sr-only">
                        Location
                     </label>
                     <input
                        id="location"
                        name="location"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Location"
                     />
                  </div>
                  <div>
                     <label htmlFor="description" className="sr-only">
                        Detailed Description
                     </label>
                     <textarea
                        id="description"
                        name="description"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Detailed Description"
                     />
                  </div>
                  <div>
                     <label htmlFor="rent" className="sr-only">
                        Rent Amount
                     </label>
                     <input
                        id="rent"
                        name="rent"
                        type="number"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Rent Amount"
                     />
                  </div>
                  <div>
                     <label htmlFor="bedrooms" className="sr-only">
                        Number of Bedrooms
                     </label>
                     <input
                        id="bedrooms"
                        name="bedrooms"
                        type="number"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Number of Bedrooms"
                     />
                  </div>
                  <div>
                     <label htmlFor="amenities" className="sr-only">
                        Amenities
                     </label>
                     <input
                        id="amenities"
                        name="amenities"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Amenities"
                     />
                  </div>
                  <div>
                     <label htmlFor="photo-url" className="sr-only">
                        Photo URL
                     </label>
                     <input
                        id="photo-url"
                        name="photo-url"
                        type="text"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Photo URL"
                     />
                  </div>
                  
               </div>

               <div>
                  <button
                     type="submit"
                     className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                     List Flat
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default withAuth(page);

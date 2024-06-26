"use client";
import withAuth from "@/utils/withAuth";
import { useSearchParams } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

interface FormData {
   location: string;
   description: string;
   rent: number;
   numberOfBedrooms: number;
   amenities: string;
   photoUrl: string;
}

const EditFlat = () => {
   const { register, handleSubmit } = useForm<FormData>();
   const searchParams = useSearchParams();
   const flatId = searchParams.get("flatId");

   const onSubmit: SubmitHandler<FormData> = async (data, e) => {
      data.rent = Number(data.rent);
      data.numberOfBedrooms = Number(data.numberOfBedrooms);

      const newData = data;
      let bodyData = {};

      Object.keys(newData).forEach((key) => {
         if (
            newData[key as keyof FormData] !== "" &&
            newData[key as keyof FormData] !== 0
         ) {
            bodyData = { ...bodyData, [key]: newData[key as keyof FormData] };
         }
      });

      try {
         const token = localStorage.getItem("token");

         const response = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/flats/${flatId}`,
            {
               method: "PUT",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `${token}`,
               },
               body: JSON.stringify(bodyData),
            }
         );

         if (response.ok) {
            toast.success("Flat Updated successfully");
            e?.target.reset();
         } else {
            toast.error("Failed to Update flat");
         }
      } catch (error) {
         toast.error("Failed to Update flat");
      }
   };

   return (
      <div className="h-screen-16 flex items-center justify-center bg-gray-50 py-1 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md w-full space-y-8 shadow-lg p-6 rounded-lg bg-white">
            <div>
               <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Update Your Flat Listing
               </h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
               <div className="rounded-md shadow-sm space-y-4">
                  <div>
                     <label htmlFor="location" className="sr-only">
                        Location
                     </label>
                     <input
                        {...register("location")}
                        id="location"
                        type="text"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Location"
                     />
                  </div>
                  <div>
                     <label htmlFor="description" className="sr-only">
                        Detailed Description
                     </label>
                     <textarea
                        {...register("description")}
                        id="description"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Detailed Description"
                     />
                  </div>
                  <div>
                     <label htmlFor="rent" className="sr-only">
                        Rent Amount
                     </label>
                     <input
                        {...register("rent")}
                        id="rent"
                        type="number"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Rent Amount"
                     />
                  </div>
                  <div>
                     <label htmlFor="bedrooms" className="sr-only">
                        Number of Bedrooms
                     </label>
                     <input
                        {...register("numberOfBedrooms")}
                        id="bedrooms"
                        type="number"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Number of Bedrooms"
                     />
                  </div>
                  <div>
                     <label htmlFor="amenities" className="sr-only">
                        Amenities
                     </label>
                     <input
                        {...register("amenities")}
                        id="amenities"
                        type="text"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Amenities"
                     />
                  </div>
                  <div>
                     <label htmlFor="photoUrl" className="sr-only">
                        Photo URL
                     </label>
                     <input
                        {...register("photoUrl")}
                        id="photoUrl"
                        type="text"
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
                     Save Changes
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default withAuth(EditFlat);

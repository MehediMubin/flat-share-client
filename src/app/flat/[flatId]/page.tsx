"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";

const Page = () => {
   const { flatId } = useParams();
   const [isLoading, setIsLoading] = useState(true);
   const [flatData, setFlatData] = useState({
      location: "",
      description: "",
      rent: 0,
      numberOfBedrooms: 0,
      amenities: "",
      photoUrl: "",
   });

   useEffect(() => {
      if (flatId) {
         fetch(`http://localhost:5000/api/flats/${flatId}`)
            .then((response) => response.json())
            .then((data) => {
               setFlatData(data.data);
               setIsLoading(false);
            })
            .catch((error) => {
               console.error("Error:", error);
               setIsLoading(false);
            });
      }
   }, [flatId]);

   if (isLoading) {
      return <LoadingSpinner />;
   }

   return (
      <div className="p-5">
         {flatData && (
            <div className="border border-gray-300 rounded p-5 mb-5 shadow-lg max-w-md mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
               <h2 className="text-2xl mb-2">{flatData.location}</h2>
               <p className="mb-2">{flatData.description}</p>
               <p className="mb-2">
                  <strong>Rent:</strong> {flatData.rent}
               </p>
               <p className="mb-2">
                  <strong>Number of Bedrooms:</strong>{" "}
                  {flatData.numberOfBedrooms}
               </p>
               <p className="mb-2">
                  <strong>Amenities:</strong> {flatData.amenities}
               </p>
               {flatData.photoUrl && (
                  <Image
                     className="mt-5"
                     src={flatData.photoUrl}
                     alt="Flat"
                     width={500}
                     height={500}
                  />
               )}
               <Link
                  href="/request-flat"
                  className="mt-5 inline-block bg-blue-500 text-white px-4 py-2 rounded"
               >
                  Share Request
               </Link>
            </div>
         )}
      </div>
   );
};

export default Page;

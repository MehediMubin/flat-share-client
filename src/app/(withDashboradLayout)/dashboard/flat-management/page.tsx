"use client";
import MyFlatCard from "@/components/MyFlatCard";
import React, { useEffect, useState } from "react";

export interface Flat {
   _id: string;
   location: string;
   description: string;
   rent: number;
   numberOfBedrooms: number;
   amenities: string;
   photoUrl: string;
}

const Page = () => {
   const [flats, setFlats] = useState([]);

   useEffect(() => {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/flats`)
         .then((response) => response.json())
         .then((data) => setFlats(data.data))
         .catch((error) => console.error("Error:", error));
   }, []);

   const handleDelete = async (flatId: string) => {
      const token = localStorage.getItem("token");
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/flats/${flatId}`, {
         method: "DELETE",
         headers: {
            Authorization: `${token}`,
         },
      });
      setFlats(flats.filter((flat: Flat) => flat._id !== flatId));
   };

   return (
      <div className="px-2 md:px-8 lg:px-16 py-4">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center">
            {flats.map((flat: Flat, index: number) => (
               <MyFlatCard
                  key={index}
                  flatId={flat._id}
                  location={flat.location}
                  description={flat.description}
                  rent={flat.rent}
                  amenities={flat.amenities}
                  photoUrl={flat.photoUrl}
                  onDelete={handleDelete}
               />
            ))}
         </div>
      </div>
   );
};

export default Page;

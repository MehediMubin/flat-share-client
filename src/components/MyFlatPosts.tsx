"use client";
import React, { useEffect, useState } from "react";
import MyFlatCard from "../components/MyFlatCard";
import { Flat } from "./FlatList";

const MyFlatPosts = () => {
   const [flats, setFlats] = useState([]);

   useEffect(() => {
      const token = localStorage.getItem("token");
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/flats/user`, {
         headers: {
            Authorization: `${token}`,
         },
      })
         .then((response) => response.json())
         .then((data) => {
            setFlats(data.data);
         })
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
      <div className="px-2 md:px-8 lg:px-16">
         <hr />
         <h1 className="text-center text-4xl font-bold text-gray-800 my-5">
            My Flat Lists
         </h1>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-center">
            {flats && flats.length > 0 ? (
               flats.map((flat: Flat) => (
                  <MyFlatCard
                     key={flat._id}
                     flatId={flat._id}
                     location={flat.location}
                     description={flat.description}
                     photoUrl={flat.photoUrl}
                     amenities={flat.amenities}
                     rent={flat.rent}
                     onDelete={handleDelete}
                  />
               ))
            ) : (
               <div className="flex justify-center items-center h-full">
                  <p>Oops, you haven&apos;t posted any flat yet.</p>
               </div>
            )}
         </div>
      </div>
   );
};

export default MyFlatPosts;

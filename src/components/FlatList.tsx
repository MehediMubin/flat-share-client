"use client";
import React, { useEffect, useState } from "react";
import FlatCard from "./FlatCard";

export interface Flat {
   location: string;
   description: string;
   rent: number;
   numberOfBedrooms: number;
   amenities: string;
   photoUrl: string;
}

const FlatList = () => {
   const [flats, setFlats] = useState([]);

   useEffect(() => {
      fetch("http://localhost:5000/api/flats")
         .then((response) => response.json())
         .then((data) => setFlats(data.data))
         .catch((error) => console.error("Error:", error));
   }, []);

   return (
      <div className="p-5">
         {flats.map((flat: Flat, index: number) => (
            <FlatCard
               key={index}
               location={flat.location}
               description={flat.description}
               rent={flat.rent}
               numberOfBedrooms={flat.numberOfBedrooms}
               amenities={flat.amenities}
               photoUrl={flat.photoUrl}
            />
         ))}
      </div>
   );
};

export default FlatList;

"use strict";
import React, { useEffect, useState } from "react";
import FlatCard from "./FlatCard";

export interface Flat {
   _id: string;
   location: string;
   description: string;
   rent: number;
   numberOfBedrooms: number;
   amenities: string;
   photoUrl: string;
}

const FlatList = ({ searchState }: { searchState: any }) => {
   const [flats, setFlats] = useState([]);

   useEffect(() => {
      const params = new URLSearchParams(searchState).toString();
      fetch(`http://localhost:5000/api/flats?${params}`)
         .then((response) => response.json())
         .then((data) => setFlats(data.data))
         .catch((error) => console.error("Error:", error));
   }, [searchState]);

   return (
      <div className="p-5">
         {flats.map((flat: Flat, index: number) => (
            <FlatCard
               key={index}
               _id={flat._id}
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

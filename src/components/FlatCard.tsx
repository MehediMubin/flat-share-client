import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Flat } from "./FlatList";

const FlatCard = (props: Flat) => {
   const {
      _id,
      location,
      description,
      rent,
      numberOfBedrooms,
      amenities,
      photoUrl,
   } = props;

   return (
      <div className="card card-side bg-base-100 shadow-xl mb-8 flex flex-col md:flex-row">
         <figure className="w-full md:w-1/3 h-64 md:h-auto">
            <Image
               src={photoUrl}
               alt="Flat Image"
               width={500}
               height={500}
               layout="responsive"
            />
         </figure>
         <div className="card-body p-4">
            <h2 className="card-title text-2xl font-semibold mb-2">
               {location}
            </h2>
            <p className="text-gray-700 mb-2">{description}</p>
            <p className="text-indigo-500 font-semibold mb-2">{`Rent: ${rent}`}</p>
            <p className="text-gray-500 mb-2">{`Bedrooms: ${numberOfBedrooms}`}</p>
            <div className="mb-4">
               <h3 className="font-semibold mb-1 inline">Amenities: </h3>
               <span className="text-gray-700">{amenities}</span>
            </div>
            <div className="card-actions justify-end">
               <Link
                  href={`/flat/${_id}`}
                  className="btn btn-primary bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
               >
                  See Details
               </Link>
            </div>
         </div>
      </div>
   );
};

export default FlatCard;

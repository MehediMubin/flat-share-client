import Image from "next/image";
import React from "react";

interface MyFlatCardProps {
   location: string;
   description: string;
   photoUrl: string;
   amenities: string;
   rent: number;
}

const MyFlatCard: React.FC<MyFlatCardProps> = ({
   location,
   description,
   photoUrl,
   amenities,
   rent,
}) => {
   return (
      <div className="card w-full sm:w-72 md:w-80 bg-base-100 shadow-xl">
         <figure>
            <Image src={photoUrl} alt={location} width={384} height={256} />
         </figure>
         <div className="card-body">
            <h2 className="card-title">{location}</h2>
            <p>{description}</p>
            <h3 className="card-title">Amenities:</h3>
            <span>{amenities}</span>
            <h3 className="card-title">Rent: ${rent}</h3>
            <div className="card-actions justify-end">
               <button className="btn btn-primary">Edit</button>
               <button className="btn btn-secondary ml-2">Delete</button>
            </div>
         </div>
      </div>
   );
};

export default MyFlatCard;

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface MyFlatCardProps {
   flatId: string;
   location: string;
   description: string;
   photoUrl: string;
   amenities: string;
   rent: number;
   onDelete: (flatId: string) => Promise<void>;
}

const MyFlatCard: React.FC<MyFlatCardProps> = ({
   flatId,
   location,
   description,
   photoUrl,
   amenities,
   rent,
   onDelete,
}) => {
   const [isDeleting, setIsDeleting] = useState(false);

   const deleteFlat = async () => {
      if (window.confirm("Are you sure you want to delete?")) {
         setIsDeleting(true);
         await onDelete(flatId);
         setIsDeleting(false);
      }
   };

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
               <Link
                  href={`/edit-flat?flatId=${flatId}`}
                  className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
               >
                  Edit
               </Link>
               <button
                  onClick={deleteFlat}
                  disabled={isDeleting}
                  className="btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
               >
                  {isDeleting ? "Deleting..." : "Delete"}
               </button>
            </div>
         </div>
      </div>
   );
};

export default MyFlatCard;

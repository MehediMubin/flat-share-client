import React from "react";

interface MyFlatRequestCardProps {
   location: string;
   status: string;
}

const MyFlatRequestCard: React.FC<MyFlatRequestCardProps> = ({
   location,
   status,
}) => {
   return (
      <div className="h-screen-16 flex items-center justify-center bg-gray-50 py-3 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md w-full space-y-8 shadow-lg p-6 rounded-lg bg-white">
            <div className="flex justify-between items-center">
               <h1 className="text-3xl font-extrabold text-gray-900">
                  Flat Request
               </h1>
            </div>
            <div className="space-y-4">
               <div>
                  <h2 className="text-xl font-bold text-gray-700">Location:</h2>
                  <p className="text-lg text-gray-600">{location}</p>
               </div>
               <div>
                  <h2 className="text-xl font-bold text-gray-700">
                     Request Status:
                  </h2>
                  <p
                     className={`text-lg ${
                        status === "approved"
                           ? "text-green-600"
                           : status === "rejected"
                           ? "text-red-600"
                           : "text-yellow-600"
                     }`}
                  >
                     {status}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default MyFlatRequestCard;

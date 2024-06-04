"use client";
import React, { useEffect, useState } from "react";
import MyFlatRequestCard from "./MyFlatRequestCard";

interface Request {
   location: string;
   requestStatus: string;
}

const MyFlatRequests = () => {
   const [requests, setRequests] = useState([]);

   useEffect(() => {
      const fetchRequests = async () => {
         try {
            const token = localStorage.getItem("token");
            const response = await fetch(
               "http://localhost:5000/api/booking-requests/user",
               {
                  headers: {
                     Authorization: `${token}`,
                  },
               }
            );
            const data = await response.json();
            setRequests(data.data);
         } catch (error) {
            console.error("Failed to fetch requests:", error);
         }
      };

      fetchRequests();
   }, []);

   return (
      <div className="px-2 md:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
         {requests.length > 0 ? (
            requests.map((request: Request, index) => (
               <MyFlatRequestCard
                  key={index}
                  location={request.location}
                  status={request.requestStatus}
               />
            ))
         ) : (
            <p className="text-center text-2xl text-gray-600 mt-4 col-span-full">
               You haven&apos;t Submitted any Requests Yet
            </p>
         )}
      </div>
   );
};

export default MyFlatRequests;

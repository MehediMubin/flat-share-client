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
      <div>
         {requests.length > 0 ? (
            requests.map((request: Request, index) => (
               <MyFlatRequestCard
                  key={index}
                  location={request.location}
                  status={request.requestStatus}
               />
            ))
         ) : (
            <p className="text-center text-2xl text-gray-600 mt-4">
               You haven&apos;t Submitted any Requests Yet
            </p>
         )}
      </div>
   );
};

export default MyFlatRequests;

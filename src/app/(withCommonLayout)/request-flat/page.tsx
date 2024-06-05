"use client";
import withAuth from "@/utils/withAuth";
import { useSearchParams } from "next/navigation";
import React, { FormEventHandler, useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
   const searchParams = useSearchParams();
   const flatId = searchParams.get("flatId");
   const [profileData, setProfileData] = useState({
      username: "",
      email: "",
   });

   useEffect(() => {
      const token = localStorage.getItem("token");
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`, {
         headers: {
            Authorization: `${token}`,
         },
      })
         .then((response) => response.json())
         .then((data) => setProfileData(data.data))
         .catch((error) => console.error("Error:", error));
   }, []);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const bodyData = {
         username: profileData.username,
         email: profileData.email,
      };
      const token = localStorage.getItem("token");
      fetch(`http://localhost:5000/api/booking-applications?flatId=${flatId}`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
         },
         body: JSON.stringify(bodyData),
      })
         .then((response) => response.json())
         .then((data) => toast.success(data.message))
         .catch((error) => toast.error(error.message));
   };
   return (
      <div>
         <div className="h-screen-16 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 shadow-lg p-6 rounded-lg bg-white">
               <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                     Submit Flat Share Request
                  </h2>
               </div>
               <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div className="rounded-md shadow-sm space-y-4">
                     <div>
                        <label htmlFor="username" className="sr-only">
                           Username
                        </label>
                        <input
                           id="username"
                           type="text"
                           autoComplete="username"
                           required
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Username"
                           value={profileData?.username || ""}
                        />
                     </div>
                     <div>
                        <label htmlFor="email" className="sr-only">
                           Email
                        </label>
                        <input
                           id="email"
                           type="email"
                           autoComplete="email"
                           required
                           className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                           placeholder="Email"
                           value={profileData?.email || ""}
                        />
                     </div>
                  </div>

                  <div className="mt-4 flex items-center">
                     <input
                        type="checkbox"
                        className="form-checkbox text-blue-500"
                        required
                     />
                     <label className="ml-2 text-gray-700 dark:text-gray-200">
                        Accept the terms and conditions
                     </label>
                  </div>

                  <div>
                     <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                     >
                        Submit
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default withAuth(Page);

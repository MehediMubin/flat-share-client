"use client";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import React from "react";
import { jwtPayload } from "./login/page";

const NotFound = () => {
   const token = localStorage.getItem("token");
   let url = "";
   if (token) {
      const decodedToken: jwtPayload = jwtDecode(token);
      if (decodedToken.role === "admin" || decodedToken.role === "superAdmin") {
         url = "/dashboard";
      } else url = "/";
   }

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md w-full space-y-8">
            <div>
               <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  404 - Page Not Found
               </h2>
               <p className="mt-2 text-center text-sm text-gray-600">
                  The page you are looking for does not exist. It might have
                  been moved or deleted.
               </p>
            </div>
            <div className="mt-5">
               <Link
                  href={url}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
               >
                  Go Home
               </Link>
            </div>
         </div>
      </div>
   );
};

export default NotFound;

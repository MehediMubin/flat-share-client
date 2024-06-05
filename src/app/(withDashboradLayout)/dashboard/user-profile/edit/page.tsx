"use client";
import React, { useState } from "react";

const Page = () => {
   const [statusFilter, setStatusFilter] = useState("");
   const [roleFilter, setRoleFilter] = useState("");

   const handleFilter = () => {
      // Implement your filtering logic here
   };

   return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
         <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
               <h1 className="text-2xl font-extrabold text-gray-900">
                  User Management Page
               </h1>
               <div className="mt-8">
                  <div className="mt-1">
                     <label className="text-sm font-medium text-gray-700">
                        Status
                     </label>
                     <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     >
                        <option value="">All</option>
                        <option value="active">Active</option>
                        <option value="deactive">Deactive</option>
                     </select>
                  </div>
                  <div className="mt-4">
                     <label className="text-sm font-medium text-gray-700">
                        Role
                     </label>
                     <select
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     >
                        <option value="">All</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                     </select>
                  </div>
                  <div className="mt-6">
                     <button
                        onClick={handleFilter}
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                     >
                        Submit
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Page;

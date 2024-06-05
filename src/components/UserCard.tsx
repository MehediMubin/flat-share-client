import { User } from "@/app/(withDashboradLayout)/dashboard/user-management/page";
import Link from "next/link";
import React from "react";
import { HiPencilAlt } from "react-icons/hi";

const UserCard = ({ username, email, role, status }: User) => {
   return (
      <div className="h-screen-16 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md w-full space-y-8 shadow-lg p-6 rounded-lg bg-white">
            <div className="flex justify-between items-center">
               <h1 className="text-3xl font-extrabold text-gray-900">
                  User Profile
               </h1>
               <div className="flex">
                  <Link href="/user-profile/edit">
                     <HiPencilAlt className="text-2xl text-gray-500 cursor-pointer hover:text-gray-900" />
                  </Link>
               </div>
            </div>
            <div className="space-y-4">
               <div>
                  <h2 className="text-xl font-bold text-gray-700">Username:</h2>
                  <p className="text-lg text-gray-600">{username}</p>
               </div>
               <div>
                  <h2 className="text-xl font-bold text-gray-700">Email:</h2>
                  <p className="text-lg text-gray-600">{email}</p>
               </div>
               <div>
                  <h2 className="text-xl font-bold text-gray-700">Status:</h2>
                  <p
                     className={`text-lg ${
                        status === "active" ? "text-green-600" : "text-red-600"
                     }`}
                  >
                     {status}
                  </p>
               </div>
               <div>
                  <h2 className="text-xl font-bold text-gray-700">Role:</h2>
                  <p className="text-lg text-gray-600">{role}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UserCard;

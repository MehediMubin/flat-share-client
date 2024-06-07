"use client";
import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { HiPencilAlt } from "react-icons/hi";
import LoadingSpinner from "./LoadingSpinner";

const MyProfile = () => {
   const [username, setUsername] = useState("");
   const [email, setEmail] = useState("");
   const [status, setStatus] = useState("");
   const [role, setRole] = useState("");
   const router = useRouter();
   const { setIsAuthenticated } = useContext(AuthContext);
   const [loading, setLoading] = useState(true);

   const handleLogout = () => {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      router.push("/login");
   };

   useEffect(() => {
      const fetchProfile = async () => {
         const token = localStorage.getItem("token");

         if (token) {
            const response = await fetch(
               `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile`,
               {
                  headers: {
                     Authorization: token,
                  },
               }
            );

            if (response.ok) {
               const data = await response.json();
               setUsername(data.data.username);
               setEmail(data.data.email);
               setStatus(data.data.status);
               setRole(data.data.role);
            }
         }
         setLoading(false);
      };

      fetchProfile();
   }, []);

   if (loading) {
      return <LoadingSpinner />;
   }

   return (
      <div className="h-screen-16 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md w-full space-y-8 shadow-lg p-6 rounded-lg bg-white">
            <div className="flex justify-between items-center">
               <h1 className="text-3xl font-extrabold text-gray-900">
                  My Profile
               </h1>
               <div className="flex">
                  <Link href="/dashboard/my-profile/edit">
                     <HiPencilAlt className="text-2xl text-gray-500 cursor-pointer hover:text-gray-900" />
                  </Link>
                  <FiLogOut
                     className="text-2xl text-gray-500 cursor-pointer hover:text-gray-900 ml-4"
                     onClick={handleLogout}
                  />
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

export default MyProfile;

"use strict";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DashboardHeader = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const router = useRouter();

   useEffect(() => {
      const token = localStorage.getItem("token");

      if (token) {
         const jwtPayload = JSON.parse(atob(token.split(".")[1]));
         const isTokenExpired = Date.now() >= jwtPayload.exp * 1000;

         if (isTokenExpired) {
            localStorage.removeItem("token");
            router.push("/login");
         } else {
            setIsAuthenticated(true);
         }
      }
   }, [router]);

   const handleLogout = () => {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      router.push("/login");
   };

   return (
      <div className="navbar bg-base-100">
         <div className="navbar-start">
            <Link className="btn btn-ghost text-xl" href="/dashboard">
               Dashboard
            </Link>
         </div>
         <div className="navbar-end">
            <div className="flex items-stretch">
               <ul className="menu menu-horizontal px-1">
                  <li>
                     <Link href="/dashboard/flat-management">
                        Flat Management
                     </Link>
                  </li>
                  <li>
                     <Link href="/dashboard/user-management">
                        User Management
                     </Link>
                  </li>
                  <li>
                     {isAuthenticated ? (
                        <button onClick={handleLogout}>Logout</button>
                     ) : (
                        <Link href="/login">Login</Link>
                     )}
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default DashboardHeader;

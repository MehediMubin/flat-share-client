"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
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
   return (
      <div className="navbar bg-base-100">
         <div className="navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
               >
                  <li>
                     <Link href="/">Home</Link>
                  </li>
                  <li>
                     <Link href="/about">About</Link>
                  </li>
                  <li>
                     {isAuthenticated ? (
                        <Link href="/my-profile">My Profile</Link>
                     ) : (
                        <Link href="/login">Login</Link>
                     )}
                  </li>
               </ul>
            </div>
            <Link className="btn btn-ghost text-xl" href="/">
               FlatHub
            </Link>
         </div>
         <div className="navbar-end hidden lg:flex">
            <div className="flex items-stretch">
               <ul className="menu menu-horizontal px-1">
                  <li>
                     <Link href="/">Home</Link>
                  </li>
                  <li>
                     <Link href="/about">About</Link>
                  </li>
                  <li>
                     {isAuthenticated ? (
                        <Link href="/my-profile">My Profile</Link>
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

export default Header;
